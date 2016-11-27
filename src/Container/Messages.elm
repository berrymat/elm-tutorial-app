module Container.Messages exposing (..)

import Tree.Models exposing (..)
import Tree.Messages
import Header.Messages


type Msg
    = ShowContainer
    | SelectPath NodeId
    | TreeMsg Tree.Messages.Msg
    | HeaderMsg Header.Messages.Msg
