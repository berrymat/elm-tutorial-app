module Tree.Commands exposing (..)

import Http
import Json.Decode as Decode exposing (field)
import Tree.Messages exposing (..)
import Tree.Models exposing (..)


fetchTree : Cmd Msg
fetchTree =
    Http.get fetchTreeUrl treeDecoder
        |> Http.send OnFetchTree


fetchNode : NodeId -> Cmd Msg
fetchNode nodeId =
    Http.get (fetchNodeUrl nodeId) tempChildrenDecoder
        |> Http.send (OnFetchNode nodeId)


fetchTreeUrl : String
fetchTreeUrl =
    "http://localhost:4000/tree"


fetchNodeUrl : NodeId -> String
fetchNodeUrl nodeId =
    "http://localhost:4000/node/" ++ nodeId



-- DECODERS


treeDecoder : Decode.Decoder (List TempNode)
treeDecoder =
    Decode.list tempNodeDecoder


tempNodeDecoder : Decode.Decoder TempNode
tempNodeDecoder =
    Decode.map3 TempNode
        (field "id" Decode.string)
        (field "name" Decode.string)
        (field "hasChildren" Decode.bool)


tempChildrenDecoder : Decode.Decoder TempChildren
tempChildrenDecoder =
    Decode.map2 TempChildren
        (field "id" Decode.string)
        (field "children" (Decode.list tempNodeDecoder))
