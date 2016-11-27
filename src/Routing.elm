module Routing exposing (..)

import Navigation exposing (Location)
import Players.Models exposing (PlayerId)
import Teams.Models exposing (TeamId)
import Tree.Models exposing (NodeId)
import UrlParser exposing (..)


type Route
    = PlayersRoute
    | PlayerRoute PlayerId
    | TeamsRoute
    | TeamRoute TeamId
    | ContainerRoute String NodeId
    | NotFoundRoute


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map TeamsRoute top
        , map PlayerRoute (s "players" </> string)
        , map PlayersRoute (s "players")
        , map TeamRoute (s "teams" </> string)
        , map TeamsRoute (s "teams")
        , map ContainerRoute (s "container" </> string </> s "path" </> string)
        ]


parseLocation : Location -> Route
parseLocation location =
    case (parseHash matchers location) of
        Just route ->
            route

        Nothing ->
            NotFoundRoute
