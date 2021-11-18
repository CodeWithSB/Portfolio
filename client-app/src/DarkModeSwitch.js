import React from 'react';
import { motion } from "framer-motion/dist/framer-motion";

export default function DarkModeSwitch({ isDark, setDarkMode }) {
    return (
        <motion.div animate onClick={setDarkMode} className={`m-2 w-12 h-8 p-1 flex items-center rounded-full cursor-pointer ${ isDark? 'bg-gray-600 justify-end': 'bg-gray-300 justify-start'}`} >
            <motion.div animate className='w-6 h-6 rounded-full bg-white shadow-lg'/>
        </motion.div>
    )
}
