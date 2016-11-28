module Header.Update exposing (..)

import Header.Messages exposing (..)
import Header.Models exposing (..)


update : Msg -> HeaderInfo -> ( HeaderInfo, Cmd Msg )
update message headerInfo =
    case message of
        OnFetchRoot headerId (Ok newHeaderInfo) ->
            ( newHeaderInfo, Cmd.none )

        OnFetchRoot headerId (Err error) ->
            ( headerInfo, Cmd.none )

        OnFetchCustomer headerId (Ok newHeaderInfo) ->
            ( newHeaderInfo, Cmd.none )

        OnFetchCustomer headerId (Err error) ->
            ( headerInfo, Cmd.none )

        OnFetchClient headerId (Ok newHeaderInfo) ->
            ( newHeaderInfo, Cmd.none )

        OnFetchClient headerId (Err error) ->
            ( headerInfo, Cmd.none )

        OnFetchSite headerId (Ok newHeaderInfo) ->
            ( newHeaderInfo, Cmd.none )

        OnFetchSite headerId (Err error) ->
            ( headerInfo, Cmd.none )

        OnFetchStaff headerId (Ok newHeaderInfo) ->
            ( newHeaderInfo, Cmd.none )

        OnFetchStaff headerId (Err error) ->
            ( headerInfo, Cmd.none )
