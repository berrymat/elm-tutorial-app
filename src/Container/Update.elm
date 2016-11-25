module Container.Update exposing (..)

import Container.Messages exposing (Msg(..))
import Container.Models exposing (..)
import Tree.Update
import Navigation


update : Msg -> Container -> ( Container, Cmd Msg )
update message container =
    case message of
        ShowContainer ->
            ( container, Navigation.newUrl "#container" )

        TreeMsg subMsg ->
            let
                ( updatedTree, cmd ) =
                    Tree.Update.update subMsg container.tree
            in
                ( { container | tree = updatedTree }, Cmd.map TreeMsg cmd )
