import { Route, Routes, Link } from "react-router-dom"
import StreetMap from "./streetmap"
// import Sidenav from "./navbar/sidenav"
// import { Link, Route, Router } from "react-router-dom"
// import { Switch } from "@material-ui/core"
import StickyHeadTable from "./userview"
// import DeviceStatus from "./content/devicestatus"
import DeviceStatus from "./devicestatus"
import DeviceDetail from "./devicedetail"

const Main = (props) => {
    

    return (
        <>
            <div className="admin-wrapper">
                <div className="left-sidebar">
                    <ul>
                        <li><a href="/device-list">Device List</a></li>
                        <li><a href="/product">Products</a></li>
                        <li><a href="/device-status">Device Status</a></li>
                        <li><a href="/device-detail">Device Detail</a></li>
                        <li><a href="#">Contact List</a></li>
                        <li><a href="#">Account List</a></li>
                        <li><a href="#">Account Log</a></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>   
                </div>

                <div className="admin-content">
                    <Routes>
                        <Route path="/device-list" element={<StickyHeadTable name="DIVICE LIST"></StickyHeadTable>} />
                        <Route path="/product" element={<StreetMap name="PRODUCT VIEW" />} />
                        <Route path="/device-status" element={<DeviceStatus name="DEVICE STATUS"></DeviceStatus>} />
                        <Route path="/device-detail" element={<DeviceDetail name="DEVICE DETAIL" ></DeviceDetail>} />
                    </Routes>
                </div>
            </div>
        </>

    )
}
export default Main