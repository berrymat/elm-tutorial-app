module Models exposing (..)

import Players.Models exposing (Player)
import Teams.Models exposing (Team)
import Container.Models exposing (Container, initialContainer)
import Routing
import Navigation exposing (Location)


type alias Model =
    { players : List Player
    , teams : List Team
    , container : Container
    , route : Routing.Route
    , location : Location
    }


initialModel : Routing.Route -> Location -> Model
initialModel route location =
    { players = []
    , teams = []
    , container = initialContainer
    , route = route
    , location = location
    }


baseUrl : Location -> String
baseUrl location =
    let
        origin =
            location.origin

        parts =
            location.pathname
                |> String.split "/"

        pathname =
            parts
                |> List.take ((List.length parts) - 2)
                |> String.join "/"
    in
        (origin ++ pathname ++ "/")
