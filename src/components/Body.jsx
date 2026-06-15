import React from 'react'
import SideBar from './SideBar'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useEffect } from 'react'

const Body = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth < 768) {
      dispatch(closeMenu());
    }
  }, []);

  const isWatchPage =
    location.pathname === "/watch";

  return (

    <div className='h-screen overflow-hidden'>

      {/* Header */}
      <Header />

      <div className='flex h-[calc(100vh-70px)] relative'>

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