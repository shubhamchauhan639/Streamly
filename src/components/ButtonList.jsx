import React from 'react'
import Button from './Button'

const list = ['All', 'Music', 'Gaming', 'News', 'Sports', 'Movies', 'Fashion', 'Education', 'Comedy', 'Live', 'Podcast', 'Tech', 'Travel', 'Food', 'Animals', 'ASMR']
const ButtonList = () => {
  return (
    <div className='flex'>
     {list.map((item) => (
       <Button key={item} label={item} />
     ))}
    </div>
  )
}

export default ButtonList
