import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const SideBar = () => {
    const isMenu = useSelector((store) => store.app.isMenue)
    if(!isMenu) return null
  return (
   <div className="w-64 min-w-64 h-full bg-white shadow-lg px-5 py-6">

      {/* Main Menu */}
      <ul className='space-y-2 border-b pb-5'>
        <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer font-medium transition duration-200'>
          <Link to='/'>🏠 Home</Link>
        </li>

        <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer font-medium transition duration-200'>
          🎬 Shorts
        </li>

        <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer font-medium transition duration-200'>
          📺 Videos
        </li>

      </ul>

      {/* Subscription */}
      <div className='mt-6'>
        <h1 className='text-lg font-bold mb-3 text-gray-800'>
          Subscriptions
        </h1>

        <ul className='space-y-2'>
          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            📡 Channel 1
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            📡 Channel 2
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            📡 Channel 3
          </li>
        </ul>
      </div>

      {/* You Section */}
      <div className='mt-6'>
        <h1 className='text-lg font-bold mb-3 text-gray-800'>
          You
        </h1>

        <ul className='space-y-2'>
          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            👤 Your Channel
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            🕒 History
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            📂 Playlist
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            ⏳ Watch Later
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            👍 Liked Videos
          </li>
        </ul>
      </div>

    </div>
  )
}

export default SideBar