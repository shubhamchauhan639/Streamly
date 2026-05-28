import React from 'react'
import SideBar from './SideBar'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'

const Body = () => {

  const location = useLocation();

  const isWatchPage =
    location.pathname === "/watch";

  return (

    <div className='h-screen overflow-hidden'>

      {/* Header */}
      <Header />

      <div className='flex h-[calc(100vh-70px)]'>

        {/* Sidebar */}
        <div
          className={
            isWatchPage
              ? "fixed top-[70px] left-0 z-50"
              : ""
          }
        >
          <SideBar />
        </div>

        {/* Main Content */}
        <div className='flex-1 overflow-y-auto'>
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default Body