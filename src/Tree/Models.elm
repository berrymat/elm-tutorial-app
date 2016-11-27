module Tree.Models exposing (..)


type alias NodeId =
    String


type alias TempNode =
    { id : NodeId
    , type_ : String
    , name : String
    , hasChildren : Bool
    }


type alias TempChildren =
    { id : NodeId
    , type_ : String
    , children : List TempNode
    }


type alias TempRoot =
    { id : NodeId
    , type_ : String
    , name : String
    , children : List TempNode
    }


type ChildrenState
    = NoChildren
    | Collapsed
    | Expanding
    | Expanded


type NodeType
    = RootType
    | CustomerType
    | ClientType
    | SiteType
    | StaffType


type alias Node =
    { id : NodeId
    , nodeType : NodeType
    , name : String
    , selected : Bool
    , childrenState : ChildrenState
    , childNodes : ChildNodes
    }


type ChildNodes
    = ChildNodes (List Node)


type alias Tree =
    { id : NodeId
    , nodeType : NodeType
    , name : String
    , children : List Node
    , path : List Node
    }


convertNodeType : String -> Maybe NodeType
convertNodeType type_ =
    if type_ == "root" then
        Just RootType
    else if type_ == "customer" then
        Just CustomerType
    else if type_ == "client" then
        Just ClientType
    else if type_ == "site" then
        Just SiteType
    else if type_ == "staff" then
        Just StaffType
    else
        Nothing


new : Node
new =
    { id = "0"
    , nodeType = RootType
    , name = ""
    , selected = False
    , childrenState = NoChildren
    , childNodes = ChildNodes []
    }


initialTree : Tree
initialTree =
    { id = ""
    , nodeType = RootType
    , name = ""
    , children = []
    , path = []
    }
