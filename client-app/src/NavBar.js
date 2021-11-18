import React from 'react';
import { AnimateSharedLayout } from "framer-motion/dist/framer-motion";
import NavItemDisplay from './NavItemDisplay';
import DarkModeSwitch from './DarkModeSwitch';

 
export default function NavBar({NavItems, selectedNav, onClick, isDark, setDarkMode, isMenuOpen}) {
    
    return (
        <div className={`z-50 bg-green-600 w-0 md:w-16 h-full fixed transition-width duration-500 ease-in-out ${ isMenuOpen ? 'w-48': 'w-0' } group md:hover:w-48`}>
            <div className="flex flex-col justify-between items-center w-full h-full overflow-y-auto overflow-x-hidden">
                <a href='/' className={`h-14 m-1 py-2 bg-green-800 text-white flex justify-center items-center text-2xl font-semibold rounded-sm w-11/12`}>
                    JD
                </a>
                <AnimateSharedLayout>
                    <div className="grid grid-cols-1 gap-4 justify-items-center items-center my-4 w-full">
                        {
                            NavItems && NavItems.map(item => (
                                <NavItemDisplay 
                                    key={item.Heading} 
                                    NavItem={item} 
                                    isMenuOpen={isMenuOpen}
                                    isSelected = {selectedNav.Heading === item.Heading} 
                                    onClick={() => {onClick(item)}}/>
                            ))
                        }
                    </div>
                </AnimateSharedLayout>
                <div className="flex items-center justify-center mb-2">
                    <p className={`text-gray-50 tracking-wide font-bold text-xs ${ isMenuOpen ? 'inline-block': 'hidden' } md:group-hover:inline-block`}> LIGHT </p>
                    <DarkModeSwitch isDark={isDark} setDarkMode={setDarkMode} />
                    <p className={`text-gray-600 tracking-wide font-bold text-xs ${ isMenuOpen ? 'inline-block': 'hidden' } md:group-hover:inline-block`}> DARK </p>
                </div>
            </div>
        </div>
    )
}
