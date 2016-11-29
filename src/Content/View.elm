module Content.View exposing (..)

import Html exposing (..)
import Content.Messages exposing (..)
import Content.Models exposing (..)


view : Content -> Html Msg
view content =
    case content of
        FilesContent files ->
            contentFiles files

        UsersContent users ->
            contentUsers users

        CasesContent cases ->
            contentCases cases

        EmptyContent ->
            contentEmpty


contentFiles : Files -> Html Msg
contentFiles files =
    div []
        [ text "Files"
        ]


contentUsers : Users -> Html Msg
contentUsers users =
    div []
        [ text "Users"
        ]


contentCases : Cases -> Html Msg
contentCases cases =
    div []
        [ text "Cases"
        ]


contentEmpty : Html Msg
contentEmpty =
    div []
        [ text "Empty"
        ]
