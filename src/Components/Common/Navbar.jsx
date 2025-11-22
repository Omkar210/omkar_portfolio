import React, { useContext, useRef } from 'react';
import { NavbarContext } from '../Context/NavContext';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useContext(NavbarContext);
    const navRef = useRef(null);

  return (
    <div className='z-50 flex fixed top-0 w-full items-start justify-end p-5'>
        {/* This is the main container for the menu button */}
        <div 
            onClick={() => setIsNavOpen(!isNavOpen)}
            onMouseEnter={() => { 
                if (navRef.current) navRef.current.style.height = "100%";
            }} 
            onMouseLeave={() => {
                if (navRef.current) navRef.current.style.height = "0%";
            }}
            className='relative bg-black h-12 w-60 flex justify-center items-center cursor-pointer overflow-hidden'
        >
            {/* This is the purple div for the hover effect */}
            <div ref={navRef} className='bg-purple-400 transition-all duration-300 absolute top-0 h-0 w-full'></div>
            {/* This is the hamburger/cross icon */}
            <div className='relative h-8 w-14 flex items-center justify-center'>
                <div className={`absolute w-10 h-0.5 bg-white transition-all duration-300 ${isNavOpen ? 'rotate-45' : 'translate-y-1'}`}></div>
                <div className={`absolute w-10 h-0.5 bg-white transition-all duration-300 ${isNavOpen ? '-rotate-45' : '-translate-y-1'}`}></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;