module Content.Messages exposing (..)

import Http
import Content.Models exposing (..)
import Tree.Models exposing (NodeId)


type Msg
    = OnFetchFiles NodeId (Result Http.Error Files)
    | OnFetchUsers NodeId (Result Http.Error Users)
    | OnFetchCases NodeId (Result Http.Error Cases)
