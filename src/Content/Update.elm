module Content.Update exposing (..)

import Content.Commands exposing (..)
import Content.Messages exposing (..)
import Content.Models exposing (..)
import Tree.Models exposing (..)
import Tree.Messages
import Tree.Update
import Debug exposing (..)


update : String -> Msg -> Content -> ( Content, Cmd Msg )
update origin message content =
    case message of
        OnFetchFolders nodeId (Ok folders) ->
            ( FoldersContent folders, Cmd.none )

        OnFetchFolders nodeId (Err error) ->
            ( content, Cmd.none )

        OnFetchUsers nodeId (Ok users) ->
            ( UsersContent users, Cmd.none )

        OnFetchUsers nodeId (Err error) ->
            ( content, Cmd.none )

        OnFetchCases nodeId (Ok cases) ->
            ( CasesContent cases, Cmd.none )

        OnFetchCases nodeId (Err error) ->
            ( content, Cmd.none )

        OnFetchFiles nodeId (Ok files) ->
            case content of
                FoldersContent folders ->
                    ( FoldersContent { folders | files = files }, Cmd.none )

                UsersContent _ ->
                    ( content, Cmd.none )

                CasesContent _ ->
                    ( content, Cmd.none )

                EmptyContent ->
                    ( content, Cmd.none )

        OnFetchFiles nodeId (Err error) ->
            ( content, Cmd.none )

        TreeMsg subMsg ->
            case content of
                FoldersContent folders ->
                    let
                        ( updatedTree, cmdTree, path ) =
                            Tree.Update.update subMsg folders.tree
                    in
                        updatePathFromTree origin content folders updatedTree cmdTree path

                UsersContent _ ->
                    ( content, Cmd.none )

                CasesContent _ ->
                    ( content, Cmd.none )

                EmptyContent ->
                    ( content, Cmd.none )

        SetQuery newQuery ->
            case content of
                FoldersContent folders ->
                    ( FoldersContent { folders | query = newQuery }, Cmd.none )

                UsersContent _ ->
                    ( content, Cmd.none )

                CasesContent _ ->
                    ( content, Cmd.none )

                EmptyContent ->
                    ( content, Cmd.none )

        SetTableState newState ->
            case content of
                FoldersContent folders ->
                    ( FoldersContent { folders | tableState = newState }, Cmd.none )

                UsersContent _ ->
                    ( content, Cmd.none )

                CasesContent _ ->
                    ( content, Cmd.none )

                EmptyContent ->
                    ( content, Cmd.none )


updatePathFromTree : String -> Content -> Folders -> Tree -> Cmd Tree.Messages.Msg -> List Node -> ( Content, Cmd Msg )
updatePathFromTree origin content folders updatedTree cmdTree path =
    let
        maybeSelected =
            log "path" (List.head path)

        cmdFiles =
            case maybeSelected of
                Just selected ->
                    fetchFiles origin selected.id

                Nothing ->
                    Cmd.none

        cmdBatch =
            Cmd.batch
                [ Cmd.map TreeMsg cmdTree
                , cmdFiles
                ]
    in
        ( FoldersContent { folders | tree = updatedTree, path = path }, cmdBatch )
