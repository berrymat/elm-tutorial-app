module Header.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field)
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


rootDecoder : Decode.Decoder Root
rootDecoder =
    Decode.map2 Root
        (field "id" Decode.string)
        (field "name" Decode.string)


customerDecoder : Decode.Decoder Customer
customerDecoder =
    Decode.map7 Customer
        (field "id" Decode.string)
        (field "name" Decode.string)
        (field "address" Decode.string)
        (field "contact" Decode.string)
        (field "phone" Decode.string)
        (field "email" Decode.string)
        (field "tabs" (Decode.list tabDecoder))


clientDecoder : Decode.Decoder Client
clientDecoder =
    Decode.map7 Client
        (field "id" Decode.string)
        (field "ref" Decode.string)
        (field "name" Decode.string)
        (field "address" Decode.string)
        (field "contact" Decode.string)
        (field "phone" Decode.string)
        (field "email" Decode.string)


siteDecoder : Decode.Decoder Site
siteDecoder =
    Decode.map7 Site
        (field "id" Decode.string)
        (field "ref" Decode.string)
        (field "name" Decode.string)
        (field "address" Decode.string)
        (field "contact" Decode.string)
        (field "phone" Decode.string)
        (field "email" Decode.string)


staffDecoder : Decode.Decoder Staff
staffDecoder =
    Decode.map2 Staff
        (field "id" Decode.string)
        (field "name" Decode.string)


tabDecoder : Decode.Decoder Tab
tabDecoder =
    Decode.map2 Tab
        (field "id" Decode.string)
        (field "name" Decode.string)
