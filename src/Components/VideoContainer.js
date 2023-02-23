import React, { useEffect } from 'react'
import { YOUTUBE_URL } from '../Constants/constants'

const VideoContainer = () => {
  useEffect(() => {
    getVideos()
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const json =  await data.json();
  
    console.log(json);
  } 
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer