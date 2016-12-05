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
                    if accessType /= None && (String.length value) > 0 then
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
    let
        access =
            client.access

        values =
            client.values

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
                [ headerItem "Ref" "wrench" access.name values.no
                , headerItem "Name" "globe" access.name values.name
                , headerItem "Address" "home" access.address address
                , headerItem "Contact" "user-o" access.contact values.contact
                , headerItem "Phone" "phone" access.contact values.tel
                , headerItem "Email" "envelope" access.contact values.email
                ]
            , div [ class "body-header-extra" ]
                [ text "Extra" ]
            ]


headerSite : Site -> Html Msg
headerSite site =
    let
        access =
            site.access

        values =
            site.values

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
                [ headerItem "Ref" "wrench" access.name values.no
                , headerItem "Name" "globe" access.name values.name
                , headerItem "Address" "home" access.address address
                , headerItem "Contact" "user-o" access.contact values.contact
                , headerItem "Phone" "phone" access.contact values.tel
                , headerItem "Email" "envelope" access.contact values.email
                , headerItem "Division Mgr" "user-o" access.managers values.divisionMgr
                , headerItem "Area Mgr" "user-o" access.managers values.areaMgr
                , headerItem "Supervisor" "user-o" access.managers values.supervisor
                ]
            , div [ class "body-header-extra" ]
                [ text "Extra" ]
            ]


headerStaff : Staff -> Html Msg
headerStaff staff =
    let
        access =
            staff.access

        values =
            staff.values

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
                [ headerItem "Ref" "wrench" access.name values.no
                , headerItem "Name" "globe" access.name values.name
                , headerItem "Address" "home" access.address address
                , headerItem "Tel" "phone" access.contact values.tel
                , headerItem "Mob" "phone" access.contact values.mob
                , headerItem "Email" "envelope" access.contact values.email
                ]
            , div [ class "body-header-extra" ]
                [ text "Extra" ]
            ]


headerEmpty : Html Msg
headerEmpty =
    div [ class "body-header" ]
        [ text "Empty"
        ]
