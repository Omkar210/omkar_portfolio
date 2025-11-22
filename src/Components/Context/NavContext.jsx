import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({children}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isNavColor, setIsNavColor] = useState('white');

    const locate = useLocation().pathname
    useEffect(function(){
        if(locate == '/project' || locate == '/contact'){
            setIsNavColor('black')
        }else{
            setIsNavColor('white')
        }
    },[locate])
    
  return (
    <div>
        <NavbarContext.Provider value={[isNavOpen, setIsNavOpen]}>
            <NavbarColorContext.Provider value={[isNavColor, setIsNavColor]}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext