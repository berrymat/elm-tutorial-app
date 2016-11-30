module Content.Models exposing (..)

import Tree.Models exposing (NodeId, Node)


type Content
    = FilesContent Files
    | UsersContent Users
    | CasesContent Cases
    | EmptyContent


type alias Files =
    { id : NodeId
    , name : String
    , folders : List Node
    }


type alias Users =
    { id : NodeId
    , name : String
    }


type alias Cases =
    { id : NodeId
    , name : String
    }


initialContent : Content
initialContent =
    EmptyContent
