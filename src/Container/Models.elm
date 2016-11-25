module Container.Models exposing (..)

import Tree.Models exposing (Tree, initialTree)


type alias Container =
    { tree : Tree
    }


initialContainer : Container
initialContainer =
    { tree = initialTree
    }
