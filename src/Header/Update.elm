module Header.Update exposing (..)

import Header.Messages exposing (..)
import Header.Models exposing (..)


update : Msg -> Header -> ( Header, Cmd Msg )
update message header =
    case message of
        OnFetchRoot headerId (Ok root) ->
            ( RootHeader root, Cmd.none )

        OnFetchRoot headerId (Err error) ->
            ( header, Cmd.none )

        OnFetchCustomer headerId (Ok customer) ->
            ( CustomerHeader customer, Cmd.none )

        OnFetchCustomer headerId (Err error) ->
            ( header, Cmd.none )

        OnFetchClient headerId (Ok client) ->
            ( ClientHeader client, Cmd.none )

        OnFetchClient headerId (Err error) ->
            ( header, Cmd.none )

        OnFetchSite headerId (Ok site) ->
            ( SiteHeader site, Cmd.none )

        OnFetchSite headerId (Err error) ->
            ( header, Cmd.none )

        OnFetchStaff headerId (Ok staff) ->
            ( StaffHeader staff, Cmd.none )

        OnFetchStaff headerId (Err error) ->
            ( header, Cmd.none )
