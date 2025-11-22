import React, { useContext, useRef } from 'react'
import ai_developer from '../../assets/ai developer.jfif'
import software_developer from '../../assets/software developer.jfif'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { NavbarContext } from '../Context/NavContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {

    const fullScreenNav = useRef(null)
    const [isNavOpen, setIsNavOpen] = useContext(NavbarContext);
    console.log(isNavOpen);

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.FullScreenNav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.Link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline();
        tl.to('.Link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: -0.3
            }
        });
        tl.to('.stairing', {
            height: '0%',
            stagger: { amount: 0.3 }
        });
        tl.to('.FullScreenNav', {
            display: 'none',
        });
    }
    
    useGSAP(function () {
        if (isNavOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [isNavOpen]);

  return (
    <div ref={fullScreenNav} id='FullScreenNav' className='FullScreenNav hidden h-screen overflow-hidden w-full fixed z-40 flex-col'>
        <div className='h-screen w-full fixed'>
            <div className='h-full w-full flex'>
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
            </div>
        </div>
        <div className='relative w-full flex justify-end p-5'>
            <div onClick={() => setIsNavOpen(false)} className='relative h-10 w-10 cursor-pointer'>
                <div className='absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-white'></div>
                <div className='absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 bg-white'></div>
            </div>
        </div>
        {/* This div will contain the marquee effect */}
        <Link 
            to="/" 
            onClick={() => setIsNavOpen(false)} 
            className='Link relative bg-black border-y border-white overflow-hidden'
        >
            <h1 className=' font-[Font2] text-center pt-3 leading-[0.8] text-[7vw] uppercase'>Home</h1>
            {/* The absolute container for the scrolling items */}
            <div className='moveLink absolute flex w-full h-full top-0 left-0 bg-purple-400 text-black items-center'>
                {/* The content that will scroll */}
                <div className='moveX flex-shrink-0 flex items-center h-full'>
                    <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Check it Out</h2>
                    <img className='h-16 w-auto mx-4 rounded-full object-cover' src={ai_developer} alt="Project Image 1"/>
                    <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Check it Out</h2>
                    <img className='h-16 w-auto mx-4 rounded-full object-cover' src={software_developer} alt="Project Image2"/>
                </div>
                {/* The duplicated content for a seamless loop */}
                <div className='moveX flex-shrink-0 flex items-center h-full'>
                    <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Check it Out</h2>
                    <img className='h-16 w-auto mx-4 rounded-full object-cover' src={ai_developer} alt="Project Image 1"/>
                    <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Check it Out</h2>
                    <img className='h-16 w-auto mx-4 rounded-full object-cover' src={software_developer} alt="Project Image2"/>
                </div>
            </div>
        </Link>
            <Link 
                to="/Projects" 
                onClick={() => setIsNavOpen(false)} 
                className='Link relative bg-black border-y border-white overflow-hidden'
            >
                <h1 className='font-[Font2] text-center pt-3 leading-[0.8] text-[7vw] uppercase'>Projects</h1>
                {/* The absolute container for the scrolling items */}
                <div className='moveLink absolute flex w-full h-full top-0 left-0 bg-purple-400 text-black items-center'>
                    {/* The content that will scroll */}
                    <div className='moveX flex-shrink-0 flex items-center h-full'>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>  Know Everything  </h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={ai_developer} alt="Project Image 1"/>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>  Know Everything  </h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={software_developer} alt="Project Image 2"/>
                    </div>
                    {/* The duplicated content for a seamless loop */}
                    <div className='moveX flex-shrink-0 flex items-center h-full'>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>  Know Everything  </h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={ai_developer} alt="Project Image 1"/>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>  Know Everything  </h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={software_developer} alt="Project Image 2"/>
                    </div>
                </div>
            </Link>
            <Link 
                to="/Contact" 
                onClick={() => setIsNavOpen(false)} 
                className='Link relative bg-black border-y border-white overflow-hidden'
            >
                <h1 className=' font-[Font2] text-center pt-3 leading-[0.8] text-[7vw] uppercase'>Contact</h1>
                {/* The absolute container for the scrolling items */}
                <div className='moveLink absolute flex w-full h-full top-0 left-0 bg-purple-400 text-black items-center'>
                    {/* The content that will scroll */}
                    <div className='moveX flex-shrink-0 flex items-center h-full'>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Connect with Me</h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={ai_developer} alt="Project Image 1"/>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Connect with Me</h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={software_developer} alt="Project Image 2"/>
                    </div>
                    {/* The duplicated content for a seamless loop */}
                    <div className='moveX flex-shrink-0 flex items-center h-full'>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Connect with Me</h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={ai_developer} alt="Project Image 1"/>
                        <h2 className='whitespace-nowrap font-[Font2] text-center leading-[0.4] pt-2 text-[7vw] uppercase'>Connect with Me</h2>
                        <img className='h-16 w-auto mx-4 rounded-full object-cover' src={software_developer} alt="Project Image 2"/>
                    </div>
                </div>
        </Link>
    </div>
  )
}

export default FullScreenNav