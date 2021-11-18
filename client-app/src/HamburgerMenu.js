import React from 'react'

export default function HamburgerMenu({ isOpen, setIsOpen }) {
    return (
        <div className={`relative w-8 h-8 text-white rounded-md cursor-pointer ${ isOpen? 'bg-red-500': 'bg-green-800' }`} onClick={setIsOpen}>
            <div className={`absolute top-0.5 right-0 m-1 h-1 w-5 bg-white rounded-full transform duration-500 ${ isOpen? '-translate-x-9 opacity-0 cursor-default transition-all': 'opacity-100' }`}></div>
            <div className={`absolute top-2.5 right-0 m-1 h-1 w-6 bg-white rounded-full`}></div>
            <div className={`absolute bottom-0.5 right-0 m-1 h-1 w-3.5 bg-white rounded-full transform duration-500 ${ isOpen? 'translate-x-9 opacity-0 cursor-default transition-all': 'opacity-100' }`}></div>
        </div>
    )
}
