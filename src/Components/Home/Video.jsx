import React from 'react'
import videoSrc from '../../assets/invideo-ai-1080 Clean Code. Clear Thinking. (Loop) 2025-11-19.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay loop muted className="w-full h-full object-cover" src={videoSrc} alt="Video"/>
    </div>
  )
}

export default Video