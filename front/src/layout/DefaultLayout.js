import React, {useEffect, useState} from 'react'
import {AppContent, AppSidebar, AppFooter, AppHeader} from '../components/index'

export const AuthModeDispatch = React.createContext(undefined, undefined)
export const AuthModeInfo = React.createContext(undefined, undefined)

const DefaultLayout = () => {
  const [mode, setMode] = useState('USER');

  const changeMode = async (mode) => {
    await setMode(mode)
  }

  return (
    <div>
      <AuthModeInfo.Provider value={mode}>
        <AuthModeDispatch.Provider value={{changeMode}}>
          <AppSidebar/>
          <div className="wrapper d-flex flex-column min-vh-100">
            <AppHeader/>
            <div className="body flex-grow-1">
              <AppContent/>
            </div>
            <AppFooter/>
          </div>
        </AuthModeDispatch.Provider>
      </AuthModeInfo.Provider>
    </div>
  )
}

export default DefaultLayout
