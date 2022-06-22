import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core";
import { Grid } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
import { MapContainer, TileLayer, useMap, Marker, Popup, L } from 'react-leaflet'
import DeviceDetail1 from '../devicedetail/devicedetail1';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import { Routes } from "react-router-dom"
import React, { useState } from 'react';




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    container__map: {
        border: "1px solid #a8afb7",
        borderRadius: "5px"
    },
    box__title: {
        backgroundColor: "#f8f8f8",
        borderBottom: "1px solid #a8afb7 ",
        padding: "5px",
    },

})



export default function DeviceDetail(props) {
    const classes = useStyles();
    const [tab, setTab] = useState(true)

    const handleChange = () => {
        setTab(!tab)
    }

    function checkTab() {

    }

    return (
        <>
                <h2>{props.name}</h2>
                <div className="admin-inner">
                    <Link to="/ ">Home</Link>
                    <Button onClick={handleChange} style={{ marginRight: "5px" }} variant='contained'>Detail</Button>
                    <Button onClick={handleChange} style={{ marginRight: "5px" }} variant='contained'>Detail</Button>
                    <Button variant='contained'>Detail</Button>
                    <div className='container'>
                        <Grid style={{ paddingTop: "20px" }} container spacing={3}>
                            <Grid item xs={6}>
                                <div className={classes.container__map}>
                                    <div className={classes.box__title}>
                                        <h3>Map title</h3>
                                    </div>
                                    <div style={{ padding: "10px" }}>
                                        <MapContainer style={{ height: "500px" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <Marker position={[51.505, -0.09]}>
                                                <Popup>
                                                    A pretty CSS3 popup. <br /> Easily customizable.
                                                </Popup>
                                            </Marker>
                                        </MapContainer>
                                    </div>


                                </div>
                            </Grid>
                            {/* <Grid item xs={6}>
                            <div style={{marginBottom: "20px"}} className={classes.container__map}>
                                <div className={classes.box__title}>
                                    <h3>Map title</h3>
                                </div>
                                <div style={{padding: "10px"}}>Map</div>
                            </div>
                            <div className={classes.container__map}>
                                <div className={classes.box__title}>
                                    <h3>title</h3>
                                </div>
                                <div style={{padding: "10px"}}>content</div>
                            </div>
                        </Grid> */}

                            {/* <Routes>
                                <Route path="/device-detail/page1" element={<DeviceDetail1 />}>
                                    <DeviceDetail1 />
                                </Route>
                            </Routes> */}
                            {tab ? <>
                <Grid item xs={6}>
                    <DeviceDetail1></DeviceDetail1>
                </Grid>
            </> : <></>
            }

                        </Grid>
                    </div>
                </div>
            
        </>
    )
}