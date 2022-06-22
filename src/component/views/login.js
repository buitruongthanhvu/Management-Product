import { FaUserCircle } from "react-icons/fa";
import { RiKeyFill } from "react-icons/ri"
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
// import { useRef, useState, useEffect } from 'react'
import { Formik, useFormik } from "formik"
import * as Yup from 'yup'


const useStyles = makeStyles({
    root: {
        backgroundColor: "#3362B2",
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    msg: {

    }

})

const Login = () => {
    const formik = useFormik({
        initialValues: {
            userName: '',
            passWord: ''
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .required('Username required'),
            passWord: Yup.string()
                .min(8, 'Must be 8 characters or more')
                .required("password required")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <div className="login-form">
                    <div className="login__title">
                        <span>ALINCO SENSOR FOX</span>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="login-input">
                            <div className="input__icon">
                                <FaUserCircle />
                            </div>
                            <div className="input__box">
                                <input type="text"
                                    id="userName"
                                    autoComplete="off"
                                    value={formik.values.userName}
                                    onChange={formik.handleChange}
                                    required
                                    placeholder="Username">
                                </input>

                            </div>
                        </div>
                        {formik.touched.userName && formik.errors.userName ? (
                            <div className="">{formik.errors.userName}</div>
                        ) : null}
                        <div className="login-input">
                            <div className="input__icon">
                                <RiKeyFill />
                            </div>
                            <div className="input__box">
                                <input type="passWord"
                                    id="passWord"
                                    autoComplete="off"
                                    value={formik.values.passWord}
                                    onChange={formik.handleChange}
                                    required
                                    placeholder="Password">
                                </input>
                            </div>
                        </div>
                        {formik.touched.passWord && formik.errors.passWord ? (
                            <div>{formik.errors.passWord}</div>
                        ) : null}
                        <div className="btn-form">
                            <Button type="submit" className="btn__login">Sign in</Button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login