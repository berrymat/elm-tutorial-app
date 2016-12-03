module Header.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Header.Messages exposing (..)
import Header.Models exposing (..)


view : HeaderInfo -> Html Msg
view headerInfo =
    case headerInfo.header of
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
    div [ class "body-header" ]
        [ text "Root"
        ]


headerItem : String -> String -> AccessType -> Maybe String -> Html Msg
headerItem title icon accessType maybeValue =
    let
        hidden =
            ( "display: none; height: 0px;", "" )

        ( style, textValue ) =
            case maybeValue of
                Just value ->
                    if accessType /= None then
                        ( "display: block;", " " ++ value )
                    else
                        hidden

                Nothing ->
                    hidden
    in
        p [ attribute "style" style ]
            [ abbr [ attribute "title" title ]
                [ i [ class ("fa fa-" ++ icon) ] [] ]
            , text textValue
            ]


fullAddress : Maybe String -> Maybe String -> Maybe String -> Maybe String -> Maybe String -> Maybe String
fullAddress maybeAddress1 maybeAddress2 maybeAddress3 maybeAddress4 maybePostcode =
    [ maybeAddress1, maybeAddress2, maybeAddress3, maybeAddress4, maybePostcode ]
        |> List.map (\mb -> Maybe.withDefault "" mb)
        |> List.filter (\a -> String.length (a) > 0)
        |> String.join ", "
        |> Just


headerCustomer : Customer -> Html Msg
headerCustomer customer =
    let
        access =
            customer.access

        values =
            customer.values

        address =
            fullAddress values.address1 values.address2 values.address3 values.address4 values.postcode

        backgroundImage =
            case values.image of
                Just image ->
                    ( "background-image", "url('" ++ image ++ "')" )

                Nothing ->
                    ( "display", "none" )
    in
        div [ class "body-header" ]
            [ div
                [ class "body-header-image"
                , style [ backgroundImage ]
                ]
                []
            , div [ class "body-header-content clearfix pl2 pr2" ]
                [ headerItem "Name" "globe" access.name values.name
                , headerItem "Address" "home" access.address address
                , headerItem "Contact" "user-o" access.contact values.contact
                , headerItem "Phone" "phone" access.contact values.tel
                , headerItem "Email" "envelope" access.contact values.email
                ]
            , div [ class "body-header-extra" ]
                [ text "Extra" ]
            ]


headerClient : Client -> Html Msg
headerClient client =
    div [ class "body-header" ]
        [ text "Client"
        ]



{-
   div [ class "body-header-content clearfix pl2 pr2" ]
       [ headerItem "Ref" "wrench" client.ref
       , headerItem "Name" "globe" client.name
       , headerItem "Address" "home" client.address
       , headerItem "Contact" "user-o" client.contact
       , headerItem "Phone" "phone" client.phone
       , headerItem "Email" "envelope" client.email
       ]
-}


headerSite : Site -> Html Msg
headerSite site =
    div [ class "body-header" ]
        [ text "Site"
        ]



{-
   div [ class "body-header-content clearfix pl2 pr2" ]
       [ headerItem "Ref" "wrench" site.ref
       , headerItem "Name" "globe" site.name
       , headerItem "Address" "home" site.address
       , headerItem "Contact" "user-o" site.contact
       , headerItem "Phone" "phone" site.phone
       , headerItem "Email" "envelope" site.email
       ]
-}


headerStaff : Staff -> Html Msg
headerStaff staff =
    div [ class "body-header" ]
        [ text "Staff"
        ]


headerEmpty : Html Msg
headerEmpty =
    div [ class "body-header" ]
        [ text "Empty"
        ]
