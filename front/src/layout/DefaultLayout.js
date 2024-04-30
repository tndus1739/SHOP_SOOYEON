import React, {useEffect, useState} from 'react'
import {AppContent, AppSidebar, AppFooter, AppHeader} from '../components/index'
import axios from "axios";
import _nav_dev from "src/_nav_dev";
import {CNavGroup, CNavItem} from "@coreui/react";
import {useNavigate} from "react-router-dom";
import AuthProvider from "../context/AuthProvider";

export const AuthModeDispatch = React.createContext(undefined, undefined)
export const AuthModeInfo = React.createContext(undefined, undefined)

const DefaultLayout = ({category}) => {
  const [mode, setMode] = useState('USER');

  const [navi, setNavi] = useState(category);

  const changeMode = (mode) => {
    setMode(mode)
    console.log(category)
  }

  return (
    <div>
      
      <AuthModeInfo.Provider value={mode}>
      <AuthProvider>
        <AuthModeDispatch.Provider value={{changeMode}}>
          <AppSidebar navi={navi}/>
          <div className="wrapper d-flex flex-column min-vh-100">
            
              <AppHeader/>
            
            <div className="body flex-grow-1">
              <AppContent/>
            </div>
            
            <AppFooter/>
          </div>
        </AuthModeDispatch.Provider>
        </AuthProvider>
      </AuthModeInfo.Provider>
      
    </div>
  )
}

export default DefaultLayout
