module Tree.Models exposing (..)


type alias NodeId =
    String


type alias TempNode =
    { id : NodeId
    , name : String
    , hasChildren : Bool
    }


type alias TempChildren =
    { id : NodeId
    , children : List TempNode
    }


type ChildrenState
    = NoChildren
    | Collapsed
    | Expanding
    | Expanded


type alias Node =
    { id : NodeId
    , name : String
    , selected : Bool
    , childrenState : ChildrenState
    , childNodes : ChildNodes
    }


type ChildNodes
    = ChildNodes (List Node)


type alias Tree =
    { children : List Node
    , selected : Maybe Node
    }


new : Node
new =
    { id = "0"
    , name = ""
    , selected = False
    , childrenState = NoChildren
    , childNodes = ChildNodes []
    }


initialTree : Tree
initialTree =
    { children = []
    , selected = Nothing
    }
