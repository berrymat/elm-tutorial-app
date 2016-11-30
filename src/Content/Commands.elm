module Content.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field, at)
import Content.Messages exposing (..)
import Content.Models exposing (..)
import Header.Models exposing (..)
import Tree.Models exposing (..)
import Debug


fetchContent : TabType -> NodeId -> Cmd Msg
fetchContent tabType nodeId =
    if nodeId /= "" then
        case tabType of
            FilesType ->
                fetchFiles nodeId

            UsersType ->
                fetchUsers nodeId

            CasesType ->
                fetchCases nodeId

            EmptyTab ->
                Cmd.none
    else
        Cmd.none


fetchFiles : NodeId -> Cmd Msg
fetchFiles nodeId =
    Http.get (filesUrl nodeId) filesDecoder
        |> Http.send (OnFetchFiles nodeId)


fetchUsers : NodeId -> Cmd Msg
fetchUsers nodeId =
    Http.get (usersUrl nodeId) usersDecoder
        |> Http.send (OnFetchUsers nodeId)


fetchCases : NodeId -> Cmd Msg
fetchCases nodeId =
    Http.get (casesUrl nodeId) casesDecoder
        |> Http.send (OnFetchCases nodeId)


apiUrl : String
apiUrl =
    "http://localhost:4000/"


filesUrl : NodeId -> String
filesUrl nodeId =
    apiUrl ++ "files/" ++ nodeId


usersUrl : NodeId -> String
usersUrl nodeId =
    apiUrl ++ "users/" ++ nodeId


casesUrl : NodeId -> String
casesUrl nodeId =
    apiUrl ++ "cases/" ++ nodeId



-- DECODERS


filesDecoder : Decode.Decoder Files
filesDecoder =
    Decode.map3 Files
        (field "id" Decode.string)
        (field "name" Decode.string)
        (field "folders" (Decode.list folderDecoder))


folderDecoder : Decode.Decoder Node
folderDecoder =
    Decode.map4 createNode
        (field "id" Decode.string)
        (field "type" Decode.string)
        (field "name" Decode.string)
        (field "children" (Decode.list (Decode.lazy (\_ -> folderDecoder))))


childDecoder : Decode.Decoder Node
childDecoder =
    Decode.map3 createChild
        (field "id" Decode.string)
        (field "type" Decode.string)
        (field "name" Decode.string)


createNode : NodeId -> String -> String -> List Node -> Node
createNode nodeId type_ name children =
    let
        a =
            Debug.log "nodeId" nodeId
    in
        Node
            nodeId
            (Maybe.withDefault FolderType (convertNodeType type_))
            name
            False
            (if (List.length children) == 0 then
                NoChildren
             else
                Expanded
            )
            (ChildNodes children)


createChild : NodeId -> String -> String -> Node
createChild nodeId type_ name =
    let
        a =
            Debug.log "nodeId" nodeId

        children =
            []
    in
        Node
            nodeId
            (Maybe.withDefault FolderType (convertNodeType type_))
            name
            False
            (if (List.length children) == 0 then
                NoChildren
             else
                Expanded
            )
            (ChildNodes children)


usersDecoder : Decode.Decoder Users
usersDecoder =
    Decode.map2 Users
        (field "id" Decode.string)
        (field "name" Decode.string)


casesDecoder : Decode.Decoder Cases
casesDecoder =
    Decode.map2 Cases
        (field "id" Decode.string)
        (field "name" Decode.string)
