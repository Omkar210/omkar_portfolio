import React from 'react'

const ProjectCard = () => {
  return (
    <div className='w-full h-[700px] mb-4 flex gap-4'>
          <div className='relative w-1/2 group transition-all rounded-none hover:rounded-[50px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src='https://wallpapers.com/images/featured-full/4k-uhd-rztum34zdqmjp5oh.jpg'></img>
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 bg-black/70 w-full h-full'>
              <h2 className='uppercase text-3xl font-[Font1] border-2 pt-1 px-3 text-white border-2 rounded-full'>Project 1</h2>
            </div>
          </div>
          <div className='relative w-1/2 group transition-all rounded-none hover:rounded-[50px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src='https://wallpapers.com/images/featured-full/4k-uhd-rztum34zdqmjp5oh.jpg'></img>
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 bg-black/70 w-full h-full'>
              <h2 className='uppercase text-3xl font-[Font1] border-2 pt-1 px-3 text-white border-2 rounded-full'>Project 1</h2>
            </div>
          </div>
        </div>
  )
}

export default ProjectCard