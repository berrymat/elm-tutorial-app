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


updatePathFromTree : Container -> Tree -> Cmd Tree.Messages.Msg -> List Node -> ( Container, Cmd Msg )
updatePathFromTree container updatedTree cmdTree path =
    let
        maybeSelected =
            List.head path

        cmdHeader =
            case maybeSelected of
                Just selected ->
                    Header.Commands.fetchHeader selected.nodeType selected.id

                Nothing ->
                    Header.Commands.fetchHeader container.tree.nodeType container.tree.id

        cmdBatch =
            Cmd.batch
                [ Cmd.map TreeMsg cmdTree
                , Cmd.map HeaderMsg cmdHeader
                ]
    in
        ( { container | tree = updatedTree, path = path }, cmdBatch )


update : Msg -> Container -> ( Container, Cmd Msg )
update message container =
    case message of
        ShowContainer ->
            ( container
            , Navigation.newUrl "#container/customer/path/Customer.46.Client"
            )

        SelectPath nodeId ->
            let
                ( updatedTree, cmdTree, path ) =
                    Tree.Update.update (Tree.Messages.SelectNode nodeId) container.tree
            in
                updatePathFromTree container updatedTree cmdTree path

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
                    Content.Commands.fetchContent tabType nodeId
            in
                ( { container | tab = updatedTab }, Cmd.map ContentMsg cmdContent )

        TreeMsg subMsg ->
            let
                ( updatedTree, cmdTree, path ) =
                    Tree.Update.update subMsg container.tree
            in
                updatePathFromTree container updatedTree cmdTree path

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
                    Content.Commands.fetchContent updatedTab.tabType nodeId

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
                    Content.Update.update subMsg container.content
            in
                ( { container | content = updatedContent }, Cmd.map ContentMsg cmdContent )
