module Container.Update exposing (..)

import Container.Messages exposing (Msg(..))
import Container.Models exposing (..)
import Tree.Messages
import Tree.Models exposing (..)
import Tree.Update
import Header.Models exposing (..)
import Header.Commands
import Header.Update
import Content.Commands
import Content.Update
import Navigation


updatePathFromTree : String -> Container -> Tree -> Cmd Tree.Messages.Msg -> List Node -> ( Container, Cmd Msg )
updatePathFromTree origin container updatedTree cmdTree path =
    let
        maybeSelected =
            List.head path

        ( headerId, headerType ) =
            case maybeSelected of
                Just selected ->
                    ( selected.id, selected.nodeType )

                Nothing ->
                    ( container.tree.id, container.tree.nodeType )

        cmdHeader =
            if headerId /= (Header.Models.headerId container.headerInfo) then
                Header.Commands.fetchHeader origin headerType headerId
                    |> Cmd.map HeaderMsg
            else
                Cmd.none

        cmdBatch =
            Cmd.batch
                [ Cmd.map TreeMsg cmdTree
                , cmdHeader
                ]
    in
        ( { container | tree = updatedTree, path = path }, cmdBatch )


update : String -> Msg -> Container -> ( Container, Cmd Msg )
update origin message container =
    case message of
        ShowContainer ->
            ( container
            , Navigation.newUrl "#container/customer/path/Customer-46-Client"
            )

        SelectPath nodeId ->
            let
                ( updatedTree, cmdTree, path ) =
                    Tree.Update.update (Tree.Messages.SelectNode nodeId) container.tree
            in
                updatePathFromTree origin container updatedTree cmdTree path

        SelectTab tabType ->
            let
                nodeId =
                    Header.Models.headerId container.headerInfo

                maybeTab =
                    container.headerInfo.tabs
                        |> List.filter (\t -> t.tabType == tabType)
                        |> List.head

                updatedTab =
                    case maybeTab of
                        Just tab ->
                            tab

                        Nothing ->
                            container.headerInfo.tabs
                                |> List.head
                                |> Maybe.withDefault (Tab EmptyTab "")

                cmdContent =
                    Content.Commands.fetchContent origin tabType nodeId
            in
                ( { container | tab = updatedTab }, Cmd.map ContentMsg cmdContent )

        TreeMsg subMsg ->
            let
                ( updatedTree, cmdTree, path ) =
                    Tree.Update.update subMsg container.tree
            in
                updatePathFromTree origin container updatedTree cmdTree path

        HeaderMsg subMsg ->
            let
                ( updatedHeaderInfo, cmdHeader ) =
                    Header.Update.update subMsg container.headerInfo

                nodeId =
                    Header.Models.headerId updatedHeaderInfo

                maybeTab =
                    updatedHeaderInfo.tabs
                        |> List.filter (\t -> t.tabType == container.tab.tabType)
                        |> List.head

                updatedTab =
                    case maybeTab of
                        Just tab ->
                            tab

                        Nothing ->
                            updatedHeaderInfo.tabs
                                |> List.head
                                |> Maybe.withDefault (Tab EmptyTab "")

                cmdContent =
                    Content.Commands.fetchContent origin updatedTab.tabType nodeId

                cmdBatch =
                    Cmd.batch
                        [ Cmd.map HeaderMsg cmdHeader
                        , Cmd.map ContentMsg cmdContent
                        ]
            in
                ( { container | headerInfo = updatedHeaderInfo, tab = updatedTab }, cmdBatch )

        ContentMsg subMsg ->
            let
                ( updatedContent, cmdContent ) =
                    Content.Update.update origin subMsg container.content
            in
                ( { container | content = updatedContent }, Cmd.map ContentMsg cmdContent )
