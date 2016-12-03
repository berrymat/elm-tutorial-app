module Content.Models exposing (..)

import Tree.Models exposing (NodeId, Tree, Node)
import Table


type Content
    = FoldersContent Folders
    | UsersContent Users
    | CasesContent Cases
    | EmptyContent


type alias Folders =
    { id : NodeId
    , name : String
    , tree : Tree
    , path : List Node
    , files : List File
    , tableState : Table.State
    , query : String
    }


type alias File =
    { id : NodeId
    , name : String
    , datetime : Int
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
