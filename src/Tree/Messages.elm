module Tree.Messages exposing (..)

import Http
import Tree.Models exposing (..)


type Msg
    = OnFetchTree (Result Http.Error (List TempNode))
    | OnFetchNode NodeId (Result Http.Error TempChildren)
    | ToggleNode NodeId
    | SelectNode NodeId
