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


type AccessType
    = None
    | Read
    | Write


type alias Root =
    { id : NodeId
    , name : String
    }


type alias Customer =
    { id : NodeId
    , access : CustomerAccess
    , values : CustomerValues
    }


type alias CustomerAccess =
    { name : AccessType
    , image : AccessType
    , address : AccessType
    , contact : AccessType
    }


convertAccessType : String -> AccessType
convertAccessType type_ =
    if type_ == "r" then
        Read
    else if type_ == "w" then
        Write
    else
        None


type alias CustomerValues =
    { name : Maybe String
    , address1 : Maybe String
    , address2 : Maybe String
    , address3 : Maybe String
    , address4 : Maybe String
    , postcode : Maybe String
    , contact : Maybe String
    , tel : Maybe String
    , email : Maybe String
    , image : Maybe String
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
    = FoldersType
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
