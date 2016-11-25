module Models exposing (..)

import Players.Models exposing (Player)
import Teams.Models exposing (Team)
import Container.Models exposing (Container, initialContainer)
import Routing


type alias Model =
    { players : List Player
    , teams : List Team
    , container : Container
    , route : Routing.Route
    }


initialModel : Routing.Route -> Model
initialModel route =
    { players = []
    , teams = []
    , container = initialContainer
    , route = route
    }
