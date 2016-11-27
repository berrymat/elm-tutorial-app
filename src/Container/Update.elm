module Container.Update exposing (..)

import Container.Messages exposing (Msg(..))
import Container.Models exposing (..)
import Tree.Messages
import Tree.Models exposing (..)
import Tree.Update
import Header.Commands
import Header.Update
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

        TreeMsg subMsg ->
            let
                ( updatedTree, cmdTree, path ) =
                    Tree.Update.update subMsg container.tree
            in
                updatePathFromTree container updatedTree cmdTree path

        HeaderMsg subMsg ->
            let
                ( updatedHeader, cmd ) =
                    Header.Update.update subMsg container.header
            in
                ( { container | header = updatedHeader }, Cmd.map HeaderMsg cmd )
