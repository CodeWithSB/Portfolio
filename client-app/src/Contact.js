import React, { useRef, useEffect, useState, useContext } from "react";
import Typed from "typed.js";
import { AnimateSharedLayout, motion } from "framer-motion/dist/framer-motion";
import ContactTypeDisplay from './ContactTypeDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {headingVariant, containerVariant, itemVariant} from "./PageVariants";
import { NavContext } from "./App";
import { InView } from 'react-intersection-observer';
import ContactForm from "./ContactForm";

export default function Contact({pageRef}) {
    const typedElementForHeading = useRef(null);
	const setSelectedNav = useContext(NavContext);
	const [isInView, setIsInView] = useState(false);

    const contactTypes= ['CONTACT FORM', 'EMAIL', 'PHONE'];
    const [selectedContactType, setSelectedContactType] = useState('CONTACT FORM');

    useEffect(() => {
		let typed = new Typed(typedElementForHeading.current, {
			strings: ["<span style='font-size: 14px; color: rgba(156, 163, 175)'> INFO TO </span><br/>CONTACT ME"],
			startDelay: 100,
			typeSpeed: 20,
			showCursor: false,
		});

		return () => {
			typed.destroy();
		};
	}, [isInView]);

	const viewChange = (inView) =>{
		setIsInView(inView);
		if(inView){
			setSelectedNav({Heading: 'CONTACT'});
		}
	}

    return (
		<InView threshold={0.25} onChange={(inView, entry) => viewChange(inView)}>
        <div ref={pageRef} className="w-full md:w-10/12 m-auto grid grid-cols-1 justify-start items-start">
            <motion.h4 variants={headingVariant} initial="hide" animate={isInView? "show":"hide"} exit="hide" className="text-2xl text-green-500 border-l-8 border-green-500 pl-4 pt-8 h-24 tracking-wider">
                <span ref={typedElementForHeading}></span>
            </motion.h4>
            <motion.div variants={containerVariant} initial="hide" animate="show" className="text-gray-500 p-3 md:p-4 lg:p-10 my-8 bg-white rounded-3xl text-xs dark:text-gray-200 dark:bg-gray-600">
                <AnimateSharedLayout>
                    <motion.div variants={itemVariant} className="flex gap-8 justify-center items-center">
                        {
                            contactTypes && contactTypes.map(item => (
                                <ContactTypeDisplay key={item} 
                                    contactType={item} 
                                    isSelected = {selectedContactType === item} 
                                    onClick={() => setSelectedContactType(item)}/>
                            ))
                        }
                    </motion.div>
                </AnimateSharedLayout>
                <div className='flex justify-center items-center p-4 mt-6 h-full'>
                    <div className='rounded-xl py-4 w-full m-auto text-center space-y-4'>
                        {
                            selectedContactType && (selectedContactType === 'CONTACT FORM') && 
                            <div className="w-full text-base h-full">
                                <ContactForm/>
                            </div>
                        }
                        {
                            selectedContactType && (selectedContactType === 'EMAIL') && 
                            <div className="w-full md:w-1/2 m-auto">
                                <FontAwesomeIcon icon={faEnvelope} size="6x" className="m-2 text-green-500 p-4 bg-green-100 rounded-lg"/>
                                <p className="text-sm"> Please email me at, </p>
                                <a className="text-xl text-green-500 whitespace-nowrap" href="mailto:johndoetest@gmail.com">johndoetest@gmail.com</a>
                                <p className="text-base font-semibold italic">Please note that above mentioned email is fake. Please submit your message via the form to contact me.</p>
                            </div>
                        }
                        {
                            selectedContactType && (selectedContactType === 'PHONE') && 
                            <div className="w-full md:w-1/2 m-auto text-center">
                                <FontAwesomeIcon icon={faPhoneAlt} size="6x" className="m-2 text-green-500 p-4 bg-green-100 rounded-lg"/>
                                <p className="text-sm"> Please call me at, </p>
                                <a className="text-xl text-green-500 whitespace-nowrap" href="tel:+1-847-555-TEST">+1 (847) 555-TEST</a>
                                <p className="text-base font-semibold italic">Please note that above mentioned phone is fake. Please submit your message via the form to contact me.</p>
                            </div>
                        }
                    </div>
                </div>
            </motion.div>
		</div>
        </InView>
    )
}
