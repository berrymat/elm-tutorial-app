module Container.Models exposing (..)

import Tree.Models exposing (Tree, initialTree, Node, NodeType)
import Header.Models exposing (HeaderInfo, initialHeaderInfo, Tab)


type alias Container =
    { tree : Tree
    , path : List Node
    , headerInfo : HeaderInfo
    , tab : Tab
    }


initialContainer : Container
initialContainer =
    { tree = initialTree
    , path = []
    , headerInfo = initialHeaderInfo
    , tab = Tab "" ""
    }


type alias PathItem =
    { id : String
    , nodeType : NodeType
    , name : String
    }
