import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DeviceDetail from "../views/devicedetail";
import DeviceStatus from "../views/devicestatus";
import Login from "../views/login";
import StreetMap from "../views/streetmap";
import StickyHeadTable from "../views/userview";

const routes = [
    {
        path: "/user",
        component: StickyHeadTable
    },
    {
        path: "/product",
        component: StreetMap
    },
    {
        path: "/device-detail",
        component: DeviceDetail
    },
    {
        path: "/device-status",
        component: DeviceStatus
    },
    {
        path: "/Login",
        component: Login    
    },
    {
        
    }
]