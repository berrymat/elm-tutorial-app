module Header.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Header.Messages exposing (..)
import Header.Models exposing (..)


view : Header -> Html Msg
view header =
    case header of
        RootHeader root ->
            headerRoot root

        CustomerHeader customer ->
            headerCustomer customer

        ClientHeader client ->
            headerClient client

        SiteHeader site ->
            headerSite site

        StaffHeader staff ->
            headerStaff staff

        Empty ->
            headerEmpty


headerRoot : Root -> Html Msg
headerRoot root =
    div []
        [ text "Root"
        ]


headerItem : String -> String -> String -> Html Msg
headerItem title icon value =
    let
        style =
            if String.length value > 0 then
                "display: block;"
            else
                "display: none; height: 0px;"
    in
        p [ attribute "style" style ]
            [ abbr [ attribute "title" title ]
                [ i [ class ("fa fa-" ++ icon) ] [] ]
            , text (" " ++ value)
            ]


headerCustomer : Customer -> Html Msg
headerCustomer customer =
    div [ class "clearfix pl2 pr2" ]
        [ headerItem "Name" "globe" customer.name
        , headerItem "Address" "home" customer.address
        , headerItem "Contact" "user-o" customer.contact
        , headerItem "Phone" "phone" customer.phone
        , headerItem "Email" "envelope" customer.email
        ]


headerClient : Client -> Html Msg
headerClient client =
    div [ class "clearfix pl2 pr2" ]
        [ headerItem "Ref" "wrench" client.ref
        , headerItem "Name" "globe" client.name
        , headerItem "Address" "home" client.address
        , headerItem "Contact" "user-o" client.contact
        , headerItem "Phone" "phone" client.phone
        , headerItem "Email" "envelope" client.email
        ]


headerSite : Site -> Html Msg
headerSite site =
    div [ class "clearfix pl2 pr2" ]
        [ headerItem "Ref" "wrench" site.ref
        , headerItem "Name" "globe" site.name
        , headerItem "Address" "home" site.address
        , headerItem "Contact" "user-o" site.contact
        , headerItem "Phone" "phone" site.phone
        , headerItem "Email" "envelope" site.email
        ]


headerStaff : Staff -> Html Msg
headerStaff staff =
    div []
        [ text "Staff"
        ]


headerEmpty : Html Msg
headerEmpty =
    div []
        [ text "Empty"
        ]
