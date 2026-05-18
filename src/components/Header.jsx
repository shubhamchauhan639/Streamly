import React from 'react'
import { logo } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggelMenue } from '../utils/appSlice'

const Header = () => {
    const dispatch = useDispatch()
    const toggelButton = () => {
        dispatch(toggelMenue())
    }

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md px-4 py-3'>
      <div className='flex items-center justify-between'>

        {/* Left Section */}
        <div className='flex items-center gap-4'>
          <img
          onClick={toggelButton}
            className='w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAOVBMVEX///8AAABfX19gYGBKSkrS0tJwcHDv7+/i4uK0tLTy8vIICAj7+/t4eHhkZGRBQUEQEBAkJCQ2NjYIYB2fAAAAwklEQVRoge3YTQ6DIBQEYCgVfP7r/Q/bdtEUsE26mGHjfAeYEPTpgHMiIiJ/sxhuACHaKbrfPczel9kDLvplKMIjNjzm2WnEho8pC++w2d53rcITOjzfFuoDRS+9WPhziFZc9FoNkXOTzUsAWGabTvMvItdl8Q7xrVoAv4pHXS02XHb1f1a1+GhXLZjbwq0W2FdxI1aLeoi44y8i18U8tjAPXNSjIrVaYLPLpatavLWsFtjw8gKNevXnqJeWIiIiPz0AhVgSKEcnuE4AAAAASUVORK5CYII='
            alt='menu'
          />
<a href="/">
          <img
            className='w-36 cursor-pointer object-contain'
            src={logo}
            alt='logo'
          />
          </a>
        </div>

        {/* Search Section */}
        <div className='flex items-center w-[45%]'>
          <input
            type='text'
            placeholder='Search videos...'
            className='w-full border border-gray-300 px-4 py-2 rounded-l-full outline-none focus:border-red-500 text-sm'
          />

          <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-r-full font-medium transition-colors duration-200'>
            Search
          </button>
        </div>

        {/* User Section */}
        <div>
          <img
            className='w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:scale-105 transition-transform duration-200'
            src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original'
            alt='user'
          />
        </div>

      </div>
    </header>
  )
}

export default Header