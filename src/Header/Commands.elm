module Header.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field, at)
import Header.Messages exposing (..)
import Header.Models exposing (..)
import Tree.Models exposing (NodeType(..), NodeId)


fetchHeader : NodeType -> NodeId -> Cmd Msg
fetchHeader nodeType nodeId =
    if nodeId /= "" then
        case nodeType of
            RootType ->
                fetchRoot nodeId

            CustomerType ->
                fetchCustomer nodeId

            ClientType ->
                fetchClient nodeId

            SiteType ->
                fetchSite nodeId

            StaffType ->
                fetchStaff nodeId
    else
        Cmd.none


fetchRoot : NodeId -> Cmd Msg
fetchRoot nodeId =
    Http.get (rootUrl nodeId) rootDecoder
        |> Http.send (OnFetchRoot nodeId)


fetchCustomer : NodeId -> Cmd Msg
fetchCustomer nodeId =
    Http.get (customerUrl nodeId) customerDecoder
        |> Http.send (OnFetchCustomer nodeId)


fetchClient : NodeId -> Cmd Msg
fetchClient nodeId =
    Http.get (clientUrl nodeId) clientDecoder
        |> Http.send (OnFetchClient nodeId)


fetchSite : NodeId -> Cmd Msg
fetchSite nodeId =
    Http.get (siteUrl nodeId) siteDecoder
        |> Http.send (OnFetchSite nodeId)


fetchStaff : NodeId -> Cmd Msg
fetchStaff nodeId =
    Http.get (staffUrl nodeId) staffDecoder
        |> Http.send (OnFetchStaff nodeId)


apiUrl : String
apiUrl =
    "http://localhost:4000/"


rootUrl : NodeId -> String
rootUrl nodeId =
    apiUrl ++ "roots/" ++ nodeId


customerUrl : NodeId -> String
customerUrl nodeId =
    apiUrl ++ "customers/" ++ nodeId


clientUrl : NodeId -> String
clientUrl nodeId =
    apiUrl ++ "clients/" ++ nodeId


siteUrl : NodeId -> String
siteUrl nodeId =
    apiUrl ++ "sites/" ++ nodeId


staffUrl : NodeId -> String
staffUrl nodeId =
    apiUrl ++ "staff/" ++ nodeId



-- DECODERS


rootDecoder : Decode.Decoder HeaderInfo
rootDecoder =
    Decode.map2 HeaderInfo
        (Decode.map RootHeader
            (Decode.map2 Root
                (field "id" Decode.string)
                (field "name" Decode.string)
            )
        )
        (field "tabs" (Decode.list tabDecoder))


customerDecoder : Decode.Decoder HeaderInfo
customerDecoder =
    Decode.map2 HeaderInfo
        (Decode.map CustomerHeader
            (Decode.map6 Customer
                (field "id" Decode.string)
                (field "name" Decode.string)
                (field "address" Decode.string)
                (field "contact" Decode.string)
                (field "phone" Decode.string)
                (field "email" Decode.string)
            )
        )
        (field "tabs" (Decode.list tabDecoder))


clientDecoder : Decode.Decoder HeaderInfo
clientDecoder =
    Decode.map2 HeaderInfo
        (Decode.map ClientHeader
            (Decode.map7 Client
                (field "id" Decode.string)
                (field "ref" Decode.string)
                (field "name" Decode.string)
                (field "address" Decode.string)
                (field "contact" Decode.string)
                (field "phone" Decode.string)
                (field "email" Decode.string)
            )
        )
        (field "tabs" (Decode.list tabDecoder))


siteDecoder : Decode.Decoder HeaderInfo
siteDecoder =
    Decode.map2 HeaderInfo
        (Decode.map SiteHeader
            (Decode.map7 Site
                (field "id" Decode.string)
                (field "ref" Decode.string)
                (field "name" Decode.string)
                (field "address" Decode.string)
                (field "contact" Decode.string)
                (field "phone" Decode.string)
                (field "email" Decode.string)
            )
        )
        (field "tabs" (Decode.list tabDecoder))


staffDecoder : Decode.Decoder HeaderInfo
staffDecoder =
    Decode.map2 HeaderInfo
        (Decode.map StaffHeader
            (Decode.map2 Staff
                (field "id" Decode.string)
                (field "name" Decode.string)
            )
        )
        (field "tabs" (Decode.list tabDecoder))


tabDecoder : Decode.Decoder Tab
tabDecoder =
    Decode.map2 Tab
        (field "id" Decode.string)
        (field "name" Decode.string)
