import React from 'react'

const Button = ({ label }) => {
  return (
    <div>
      <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{label}</button>
    </div>
  )
}

export default Button
