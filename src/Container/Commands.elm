module Container.Commands exposing (..)

import Container.Messages exposing (..)
import Container.Models exposing (..)
import Tree.Commands


fetchAll : Container -> Cmd Msg
fetchAll container =
    if List.isEmpty container.tree.children then
        Cmd.map TreeMsg Tree.Commands.fetchTree
    else
        Cmd.none
