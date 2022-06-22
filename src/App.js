import './style/css/style.css'
// import Header from './component/header';
// import Main from './component/main';
// import { Router } from 'react-router-dom';
// import Sidenav from './component/navbar/sidenav';
import HomeScreen from './component/views/homescreen';
import Login from './component/views/login';
// import ClippedDrawer from './component/mui';
// import StickyHeadTables from './views/user/userlist';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from "@material-ui/core";
import SignupForm from './component/views/signup';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Main from './component/views/main';


function App() {
  const [auth, setAuth] = useState(false);

  const onSubmit = () => {
    setAuth(true)
  }


  return (
    // <React.Fragment>
    //   {!auth ?
    //     <Routes>
    //       <Route path='/login' element={<Login onSubmit={onSubmit} />} />
    //       <Route path='*' element={<Navigate to='/login' replace />} />
    //     </Routes> :
    //     <Routes>
    //       <Route path='/device-status' element={<HomeScreen />} />
    //     </Routes>
    //   }

    // </React.Fragment>
    <HomeScreen></HomeScreen>
  )
}

export default App; 