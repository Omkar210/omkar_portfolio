import React from 'react'
import Video from '../Components/Home/Video.jsx'
import HomeHeroText from '../Components/Home/homeHeroText.jsx'
import HomeBottomText from '../Components/Home/homeBottomText.jsx'

const Home = () => {
  return (
    <div> 
      <div className='relative h-screen w-screen'>
        <Video />
      </div>
      <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
