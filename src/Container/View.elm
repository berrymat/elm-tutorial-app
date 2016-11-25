module Container.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, attribute, href, id, classList)
import Html.Events exposing (onClick)
import Container.Messages exposing (..)
import Container.Models exposing (..)
import Tree.View


view : Container -> Html Msg
view container =
    div []
        [ div [ class "sidebar" ]
            [ Html.map
                TreeMsg
                (Tree.View.view container.tree)
            ]
        , div [ class "body" ]
            [ div [ class "body-header" ] [ text "Body Header" ]
            , div [ class "body-content" ]
                (List.map
                    (\n -> div [] [ text ("This is the body " ++ (toString n)) ])
                    (List.range 0 100)
                )
            ]
        ]
