module Tree.Update exposing (..)

import Tree.Messages exposing (Msg(..))
import Tree.Models exposing (..)
import Tree.Commands
import Navigation


selectNode : NodeId -> Node -> ( Node, Maybe Node )
selectNode nodeId node =
    let
        (ChildNodes childNodes) =
            node.childNodes

        results =
            List.map (selectNode nodeId) childNodes

        ( newChildNodes, newSelectedNodes ) =
            List.unzip results

        newNode =
            { node | childNodes = ChildNodes newChildNodes, selected = node.id == nodeId }

        selectedNode =
            if newNode.selected then
                Just newNode
            else
                newSelectedNodes
                    |> List.filter (\maybeNode -> maybeNode /= Maybe.Nothing)
                    |> List.head
                    |> Maybe.withDefault Nothing
    in
        ( newNode, selectedNode )


select : NodeId -> Tree -> Tree
select nodeId tree =
    let
        results =
            List.map (selectNode nodeId) tree.children

        ( newChildren, newSelectedNodes ) =
            List.unzip results

        selectedNode =
            newSelectedNodes
                |> List.filter (\maybeNode -> maybeNode /= Maybe.Nothing)
                |> List.head
                |> Maybe.withDefault Nothing
    in
        { tree | children = newChildren, selected = selectedNode }



{-
   toggleNode : NodeId -> Node -> Node
   toggleNode nodeId node =
       let
           (ChildNodes childNodes) =
               node.childNodes

           newChildNodes =
               List.map (toggleNode nodeId) childNodes

           newNode =
               { node | childNodes = ChildNodes newChildNodes, selected = node.id == nodeId }
       in
           newNode


   toggle : NodeId -> Tree -> Tree
   toggle nodeId tree =
       toggleNode nodeId tree.root
-}
-- TODO: recursion


toggleChildNodes : NodeId -> Node -> ( Node, Cmd Msg )
toggleChildNodes nodeId node =
    let
        (ChildNodes childNodes) =
            node.childNodes

        results =
            List.map (toggleNode nodeId) childNodes

        ( newChildNodes, cmds ) =
            List.unzip results
    in
        ( { node | childNodes = ChildNodes newChildNodes }, Cmd.batch cmds )


toggleNode : NodeId -> Node -> ( Node, Cmd Msg )
toggleNode nodeId node =
    let
        ( newNode, cmd ) =
            if nodeId == node.id then
                case node.childrenState of
                    NoChildren ->
                        ( node, Cmd.none )

                    Collapsed ->
                        let
                            (ChildNodes childNodes) =
                                node.childNodes
                        in
                            if List.isEmpty childNodes then
                                ( { node | childrenState = Expanding }, Tree.Commands.fetchNode node.id )
                            else
                                ( { node | childrenState = Expanded }, Cmd.none )

                    Expanding ->
                        ( node, Cmd.none )

                    Expanded ->
                        ( { node | childrenState = Collapsed }, Cmd.none )
            else
                toggleChildNodes nodeId node
    in
        ( newNode, cmd )


toggle : NodeId -> Tree -> ( Tree, Cmd Msg )
toggle nodeId tree =
    let
        results =
            List.map (toggleNode nodeId) tree.children

        ( newChildren, cmds ) =
            List.unzip results
    in
        ( { tree | children = newChildren }, Cmd.batch cmds )


createNode : TempNode -> Node
createNode tempNode =
    { id = tempNode.id
    , name = tempNode.name
    , selected = False
    , childrenState =
        if tempNode.hasChildren then
            Collapsed
        else
            NoChildren
    , childNodes = ChildNodes []
    }


fetchedTree : List TempNode -> Tree
fetchedTree tempNodes =
    let
        nodes =
            List.map createNode tempNodes
    in
        { children = nodes
        , selected = Nothing
        }


convertChildren : TempChildren -> List Node
convertChildren tempChildren =
    List.map createNode tempChildren.children


expandChildren : NodeId -> TempChildren -> Node -> Node
expandChildren nodeId tempChildren node =
    if nodeId == node.id then
        { node | childrenState = Expanded, childNodes = ChildNodes (convertChildren tempChildren) }
    else
        let
            (ChildNodes childNodes) =
                node.childNodes

            newChildNodes =
                List.map (expandChildren nodeId tempChildren) childNodes
        in
            { node | childNodes = ChildNodes newChildNodes }


fetchedNode : NodeId -> TempChildren -> Tree -> Tree
fetchedNode nodeId tempChildren tree =
    let
        newChildren =
            List.map (expandChildren nodeId tempChildren) tree.children
    in
        { tree | children = newChildren }


update : Msg -> Tree -> ( Tree, Cmd Msg )
update message tree =
    case message of
        OnFetchTree (Ok tempNodes) ->
            ( fetchedTree tempNodes, Cmd.none )

        OnFetchTree (Err error) ->
            ( tree, Cmd.none )

        OnFetchNode nodeId (Ok tempChildren) ->
            ( fetchedNode nodeId tempChildren tree, Cmd.none )

        OnFetchNode nodeId (Err error) ->
            ( tree, Cmd.none )

        ToggleNode nodeId ->
            toggle nodeId tree

        SelectNode nodeId ->
            ( select nodeId tree, Cmd.none )
