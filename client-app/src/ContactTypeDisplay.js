import React from 'react'
import { motion } from "framer-motion/dist/framer-motion";

export default function ContactTypeDisplay({contactType, isSelected, onClick}) {
    return (
        <div className={`relative flex cursor-pointer ${isSelected ?'text-green-500 ':'text-gray-400'}`} onClick={onClick}>
            <h3 className="text-base">{contactType}</h3>
            {isSelected && (
                <motion.div
                layoutId="selected-nav-item"
                className="absolute -bottom-2 border-2 w-full bg-green-500 shadow-lg"
                initial={false}
                animate={{ borderColor: 'rgba(16, 185, 129)' }}
                />
            )}
        </div>
    )
}
