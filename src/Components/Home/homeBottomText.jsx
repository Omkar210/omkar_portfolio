import React from 'react'
import { Link } from 'react-router-dom'
import Project from '../../pages/Project';
import Contact from '../../pages/Contact';

const homeBottomText = () => {
  return (
    <div className='font-[Font1] flex items-center justify-center gap-4 uppercase'>
        <Link className='text-[6.5vw] leading-[6vw] hover:text-purple-400 hover:border-purple-400 border-4 rounded-full px-9 pt-2 pb-0 border-white' to={Project}>Project</Link>
        <Link className='text-[6.5vw] leading-[6vw] hover:text-purple-400 hover:border-purple-400 border-4 rounded-full px-9 pt-2 pb-0 border-white' to={Contact}>Contact</Link>
    </div>
  )
}

export default homeBottomText