module Container.Models exposing (..)

import Tree.Models exposing (Tree, initialTree, Node, NodeType)
import Header.Models exposing (Header, initialHeader)


type alias Container =
    { tree : Tree
    , path : List Node
    , header : Header
    }


initialContainer : Container
initialContainer =
    { tree = initialTree
    , path = []
    , header = initialHeader
    }


type alias PathItem =
    { id : String
    , nodeType : NodeType
    , name : String
    }
