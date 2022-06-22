import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core";
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

export default function DeviceDetail1() {
    const classes = useStyles();
    const [a, setA] = useState(true)
    return (
        <> 
                    <div style={{ marginBottom: "20px" }} className={classes.container__map}>
                        <div className={classes.box__title}>
                            <h3>Map title</h3>
                        </div>
                        <div style={{ padding: "10px" }}>Map</div>
                    </div>
                    <div className={classes.container__map}>
                        <div className={classes.box__title}>
                            <h3>title</h3>
                        </div>
                        <div style={{ padding: "10px" }}>content</div>
                    </div>
        </>
    )
}