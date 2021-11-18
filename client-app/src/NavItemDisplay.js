import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion/dist/framer-motion";

export default function NavItemDisplay({ NavItem, isSelected, onClick, isMenuOpen }) {
    return (
        <div className={`relative h-12 text-white rounded-full flex items-center cursor-pointer ${isSelected ?'bg-green-700 ':''}hover:bg-green-500 ${ isMenuOpen ? 'w-11/12': 'w-12' } md:w-12 md:group-hover:w-11/12`} onClick={onClick}>
            <div className={`whitespace-nowrap m-auto`}>
                <FontAwesomeIcon icon={NavItem.Icon} className="w-8 text-center"/>
                <p className={`w-20 ml-2 ${ isMenuOpen ? 'inline-block': 'hidden' } md:hidden md:group-hover:inline-block text-sm tracking-wider`}> {NavItem.Heading} </p>
            </div> 
            { 
                isSelected && 
                <motion.div
                layoutId="selected-nav-item"
                className="absolute -inset-1 border-2 rounded-full shadow-lg font-semibold"
                initial={false}
                animate={{ borderColor: 'rgba(4, 120, 87)' }}
                />
            }
        </div>
    )
}
