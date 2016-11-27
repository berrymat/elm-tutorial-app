module Container.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, attribute, href, id, classList)
import Html.Events exposing (onClick)
import Container.Messages exposing (..)
import Container.Models exposing (..)
import Tree.View
import Header.View


view : Container -> Html Msg
view container =
    div []
        [ div [ class "sidebar" ]
            [ Html.map
                TreeMsg
                (Tree.View.view container.tree)
            ]
        , div [ class "body" ]
            [ div [ class "body-header" ]
                [ Html.map
                    HeaderMsg
                    (Header.View.view container.header)
                ]
            , viewPath container
            , div [ class "body-content" ]
                [ div [ class "body-content-sidebar" ] [ text "sidebar" ]
                , div [ class "body-content-content" ]
                    (List.map
                        (\n -> div [] [ text ("This is the body " ++ (toString n)) ])
                        (List.range 0 100)
                    )
                ]
            ]
        ]


clickablePathItem : PathItem -> Html Msg
clickablePathItem item =
    div []
        [ div
            [ class "path-item clickable"
            , onClick (SelectPath item.id)
            ]
            [ text item.name ]
        , i [ class "fa fa-chevron-right" ] []
        ]


lastPathItem : PathItem -> Html Msg
lastPathItem item =
    div [ class "path-item" ]
        [ text item.name ]


viewPath : Container -> Html Msg
viewPath container =
    let
        tree =
            container.tree

        rootItem =
            { id = tree.id, nodeType = tree.nodeType, name = tree.name }

        ( items, last ) =
            case container.path of
                [] ->
                    ( [], rootItem )

                head :: rest ->
                    let
                        pathItems =
                            rest
                                |> List.reverse
                                |> List.map (\n -> { id = n.id, nodeType = n.nodeType, name = n.name })
                    in
                        ( rootItem :: pathItems, { id = head.id, nodeType = head.nodeType, name = head.name } )
    in
        div [ class "body-path p1" ]
            [ div []
                (List.map clickablePathItem items)
            , lastPathItem last
            ]
