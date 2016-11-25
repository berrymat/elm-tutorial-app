module Messages exposing (..)

import Navigation exposing (Location)
import Players.Messages
import Teams.Messages
import Container.Messages


type Msg
    = PlayersMsg Players.Messages.Msg
    | TeamsMsg Teams.Messages.Msg
    | ContainerMsg Container.Messages.Msg
    | OnLocationChange Location
