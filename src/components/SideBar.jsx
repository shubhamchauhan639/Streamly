import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const SideBar = () => {
  const subscriptions = useSelector(
  (store) => store.subscriptions
);
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

      <ul className="space-y-2">
  {subscriptions.slice(0, 5).map((channel, index) => (
    <li
      key={index}
      className="px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200"
    >
      📡 {channel.channelTitle}
    </li>
  ))}
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

      <Link to="/liked">
  <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
    👍 Liked Videos
  </li>
</Link>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            👍 Downloads
          </li>
        </ul>
      </div>
      <div className='mt-6'>
        <h1 className='text-lg font-bold mb-3 text-gray-800'>
          Explore
        </h1>

        <ul className='space-y-2'>
          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            🔥 Trending
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            🎵 Music
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            🎮 Gaming
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            📰 News
          </li>

          <li className='px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200'>
            🏀 Sports
          </li>

        
        </ul>
      </div>

    </div>
  )
}

export default SideBar