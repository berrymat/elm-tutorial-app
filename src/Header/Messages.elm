module Header.Messages exposing (..)

import Http
import Header.Models exposing (..)
import Tree.Models exposing (NodeId)


type Msg
    = OnFetchRoot NodeId (Result Http.Error Root)
    | OnFetchCustomer NodeId (Result Http.Error Customer)
    | OnFetchClient NodeId (Result Http.Error Client)
    | OnFetchSite NodeId (Result Http.Error Site)
    | OnFetchStaff NodeId (Result Http.Error Staff)
