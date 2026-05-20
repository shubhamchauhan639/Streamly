import React, { use, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const [searchParams]= useSearchParams();
  console.log(searchParams.get("v"))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  },[])

  return (
    <div className="px-2 py-4">
  <iframe
  width="100"
  height="500"
    className="rounded-2xl shadow-2xl w-[1000px] h-[550px]"
    src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
    title="YouTube video player"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
  )
}

export default WatchPage
