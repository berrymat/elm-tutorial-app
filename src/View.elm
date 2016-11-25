module View exposing (..)

import Html exposing (Html, div, text, button)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Messages exposing (Msg(..))
import Models exposing (Model)
import Players.Edit
import Players.List
import Players.Messages exposing (Msg(..))
import Players.Models exposing (PlayerId)
import Teams.Edit
import Teams.List
import Teams.Messages exposing (Msg(..))
import Teams.Models exposing (TeamId)
import Container.View
import Container.Messages exposing (Msg(..))
import Routing exposing (Route(..))


view : Model -> Html Messages.Msg
view model =
    div []
        [ nav model
        , page model
        ]


nav : Model -> Html Messages.Msg
nav model =
    div [ class "navbar clearfix mb2 white bg-blue p1" ]
        [ teamsBtn, playersBtn, treeBtn ]


teamsBtn : Html Messages.Msg
teamsBtn =
    button
        [ class "btn regular"
        , onClick (TeamsMsg ShowTeams)
        ]
        [ text "Teams" ]


playersBtn : Html Messages.Msg
playersBtn =
    button
        [ class "btn regular"
        , onClick (PlayersMsg ShowPlayers)
        ]
        [ text "Players" ]


treeBtn : Html Messages.Msg
treeBtn =
    button
        [ class "btn regular"
        , onClick (ContainerMsg ShowContainer)
        ]
        [ text "Container" ]


page : Model -> Html Messages.Msg
page model =
    case model.route of
        PlayersRoute ->
            Html.map PlayersMsg (Players.List.view model.players)

        PlayerRoute id ->
            playerEditPage model id

        TeamsRoute ->
            Html.map TeamsMsg (Teams.List.view model.teams)

        TeamRoute id ->
            teamEditPage model id

        ContainerRoute ->
            Html.map ContainerMsg (Container.View.view model.container)

        NotFoundRoute ->
            notFoundView


playerEditPage : Model -> PlayerId -> Html Messages.Msg
playerEditPage model playerId =
    let
        maybePlayer =
            model.players
                |> List.filter (\player -> player.id == playerId)
                |> List.head
    in
        case maybePlayer of
            Just player ->
                Html.map PlayersMsg (Players.Edit.view player)

            Nothing ->
                notFoundView


teamEditPage : Model -> TeamId -> Html Messages.Msg
teamEditPage model teamId =
    let
        maybeTeam =
            model.teams
                |> List.filter (\team -> team.id == teamId)
                |> List.head
    in
        case maybeTeam of
            Just team ->
                Html.map TeamsMsg (Teams.Edit.view team)

            Nothing ->
                notFoundView


notFoundView : Html msg
notFoundView =
    div []
        [ text "Not found"
        ]
