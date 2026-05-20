import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex h-[calc(100vh-70px)]'>

      {/* Sidebar */}
      <div className='w-64 overflow-y-auto '>
        <SideBar />
      </div>

      {/* Main Container */}
      <div className='flex-1 overflow-y-auto'>
        <Outlet />
      </div>

    </div>
  )
}

export default Body