module Tree.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, attribute, href, id, classList)
import Html.Events exposing (onClick)
import Tree.Messages exposing (..)
import Tree.Models exposing (..)


view : Tree -> Html Msg
view tree =
    div []
        [ viewTree tree
        ]


viewTree : Tree -> Html Msg
viewTree tree =
    div [ class "k-treeview" ]
        [ ul [ class "k-group", attribute "role" "group", attribute "style" "display: block;" ]
            (List.map viewNode tree.children)
        ]


viewNode : Node -> Html Msg
viewNode node =
    let
        childStyle =
            if node.childrenState == Expanded then
                "display: block;"
            else
                "display: none; overflow: visible; height: 0px;"

        expandedValue =
            if node.childrenState == Expanded then
                "true"
            else
                "false"

        ( iconClass, faClass ) =
            case node.childrenState of
                Collapsed ->
                    ( "k-icon k-plus", "fa fa-plus-square-o" )

                Expanding ->
                    ( "k-icon k-minus", "fa fa-spin fa-refresh" )

                Expanded ->
                    ( "k-icon k-minus", "fa fa-minus-square-o" )

                NoChildren ->
                    ( "", "" )

        nodeStyle =
            "k-in btn regular p0"
                ++ if node.selected then
                    " k-state-selected"
                   else
                    ""

        (Tree.Models.ChildNodes childNodes) =
            node.childNodes
    in
        li
            [ class "k-item"
            , attribute "aria-expanded" expandedValue
            , attribute "data-expanded" expandedValue
            , attribute "role" "treeitem"
            ]
            [ div [ class "k-mid" ]
                [ span
                    [ class iconClass
                    , attribute "role" "presentation"
                    , onClick (ToggleNode node.id)
                    ]
                    [ i
                        [ class faClass
                        ]
                        []
                    ]
                , div
                    [ class nodeStyle
                    , onClick (SelectNode node.id)
                    ]
                    [ text node.name ]
                ]
            , ul [ class "k-group", attribute "role" "group", attribute "style" childStyle ]
                (List.map viewNode childNodes)
            ]



-- display: none; overflow: visible; height: 0px;
--
{-
   test : Html Msg
   test =
       li [ attribute "aria-expanded" "true", class "k-item", attribute "data-expanded" "true", attribute "data-uid" "4d0e6ca6-6875-437f-9682-95c09b2fb9f6", attribute "role" "treeitem" ]
           [ div [ class "k-mid" ]
               [ span [ class "k-icon k-minus", attribute "role" "presentation" ]
                   [ i [ class "fa fa-minus-square-o" ] [] ]
               , a [ class "k-in", href "http://localhost:3000" ]
                   [ text "All Saints' Church Hillingdon" ]
               ]
           , ul [ class "k-group", attribute "role" "group", attribute "style" "display: block;" ]
               [ li [ attribute "aria-expanded" "true", class "k-item k-last", attribute "data-expanded" "true", attribute "data-uid" "75a0b5ba-e1ab-4139-93a4-d4100f8cd0d8", id "treeview_tv_active", attribute "role" "treeitem" ]
                   [ div [ class "k-bot" ]
                       [ span [ class "k-icon k-minus", attribute "role" "presentation" ]
                           [ i [ class "fa fa-plus-square-o" ] [] ]
                       , a [ class "k-in", href "http://localhost:3000" ]
                           [ text "All Saints' Church Hillingdon" ]
                       ]
                   , ul [ class "k-group", attribute "role" "group", attribute "style" "display: block;" ]
                       [ li [ class "k-item", attribute "data-uid" "417da4b2-a9f5-44e4-8c1e-0409e36fba80", attribute "role" "treeitem" ]
                           [ div [ class "k-top" ]
                               [ span [ class "k-icon k-minus", attribute "role" "presentation" ]
                                   [ i [ class "fa fa-plus-square-o" ] [] ]
                               , a [ class "k-in", href "http://localhost:3000" ]
                                   [ text "00137 - GIZINSKA, Magdalena" ]
                               ]
                           ]
                       , li [ class "k-item k-last", attribute "data-uid" "b7471966-7d80-45fa-8052-f19f899ca902", attribute "role" "treeitem" ]
                           [ div [ class "k-bot" ]
                               [ span [ class "k-icon k-minus", attribute "role" "presentation" ]
                                   [ i [ class "fa fa-spin fa-refresh" ] [] ]
                               , a [ class "k-in k-state-selected", href "http://localhost:3000" ]
                                   [ text "00136 - ROSSA, Piotr" ]
                               ]
                           ]
                       ]
                   ]
               ]
           ]
-}
