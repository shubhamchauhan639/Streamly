import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
  <div className="flex-1 p-5 overflow-hidden">
        <ButtonList/>
        <VideoContainer/>

    </div>
  )
}

export default MainContainer
