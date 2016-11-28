module Container.Commands exposing (..)

import Container.Messages exposing (..)
import Container.Models exposing (..)
import Tree.Models exposing (NodeId, NodeType, Node)
import Header.Models exposing (Header(..))
import Tree.Commands
import Header.Commands


fetchAll : NodeType -> NodeId -> Container -> Cmd Msg
fetchAll nodeType nodeId container =
    let
        treeCmd =
            if List.isEmpty container.tree.children then
                Cmd.map TreeMsg (Tree.Commands.fetchRoot nodeId)
            else
                Cmd.none

        headerCmd =
            if container.headerInfo.header == Empty then
                Cmd.map HeaderMsg (Header.Commands.fetchHeader nodeType nodeId)
            else
                Cmd.none
    in
        Cmd.batch [ treeCmd, headerCmd ]


fetchDetails : Container -> Cmd Msg
fetchDetails container =
    let
        selected =
            List.head container.path
    in
        case selected of
            Just node ->
                Cmd.map HeaderMsg (Header.Commands.fetchHeader node.nodeType node.id)

            Nothing ->
                Cmd.none
