module Container.Messages exposing (..)

import Tree.Messages


type Msg
    = ShowContainer
    | TreeMsg Tree.Messages.Msg
