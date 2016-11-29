module Header.Models exposing (..)

import Tree.Models exposing (NodeId)


type Header
    = RootHeader Root
    | CustomerHeader Customer
    | ClientHeader Client
    | SiteHeader Site
    | StaffHeader Staff
    | Empty


type alias HeaderInfo =
    { header : Header
    , tabs : List Tab
    }


type alias Root =
    { id : NodeId
    , name : String
    }


type alias Customer =
    { id : NodeId
    , name : String
    , address : String
    , contact : String
    , phone : String
    , email : String
    }


type alias Client =
    { id : NodeId
    , ref : String
    , name : String
    , address : String
    , contact : String
    , phone : String
    , email : String
    }


type alias Site =
    { id : NodeId
    , ref : String
    , name : String
    , address : String
    , contact : String
    , phone : String
    , email : String
    }


type alias Staff =
    { id : NodeId
    , name : String
    }


type TabType
    = FilesType
    | UsersType
    | CasesType
    | EmptyTab


type alias Tab =
    { tabType : TabType
    , name : String
    }


initialHeaderInfo : HeaderInfo
initialHeaderInfo =
    { header = Empty
    , tabs = []
    }


headerId : HeaderInfo -> NodeId
headerId headerInfo =
    case headerInfo.header of
        RootHeader root ->
            root.id

        CustomerHeader customer ->
            customer.id

        ClientHeader client ->
            client.id

        SiteHeader site ->
            site.id

        StaffHeader staff ->
            staff.id

        Empty ->
            ""
