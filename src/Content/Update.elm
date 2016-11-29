module Content.Update exposing (..)

import Content.Messages exposing (..)
import Content.Models exposing (..)


update : Msg -> Content -> ( Content, Cmd Msg )
update message content =
    case message of
        OnFetchFiles nodeId (Ok files) ->
            ( FilesContent files, Cmd.none )

        OnFetchFiles nodeId (Err error) ->
            ( content, Cmd.none )

        OnFetchUsers nodeId (Ok users) ->
            ( UsersContent users, Cmd.none )

        OnFetchUsers nodeId (Err error) ->
            ( content, Cmd.none )

        OnFetchCases nodeId (Ok cases) ->
            ( CasesContent cases, Cmd.none )

        OnFetchCases nodeId (Err error) ->
            ( content, Cmd.none )
