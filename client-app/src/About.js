import React, { useRef, useEffect, useState, useMemo, useContext } from "react";
import Typed from "typed.js";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import {headingVariant, containerVariant, itemVariant} from "./PageVariants";
import { NavContext } from "./App";
import { InView } from 'react-intersection-observer';

export default function About({pageRef}) {
    const typedElementForHeading = useRef(null);
	const setSelectedNav = useContext(NavContext);	
	const [isInView, setIsInView] = useState(false);
	const [scentence, setScentence] = useState(0);
	const scentenceList = useMemo(() => 
		['CS Student', 'Web Developer', 'Full Stack Developer'], 
		[]);

	React.useEffect(() => {
		setTimeout(()=>{
		if(scentence !== scentenceList.length-1){
			setScentence(scentence+1);
		}
		else{
			setScentence(0);
		}
		}, 2000);
	}, [scentenceList, scentence]);

	useEffect(() => {
		let typed = new Typed(typedElementForHeading.current, {
			strings: ["<span style='font-size: 14px; color: rgba(156, 163, 175)'>A LITTLE INFO</span><br/>ABOUT ME"],
			startDelay: 100,
			typeSpeed: 20,
			showCursor: false,
		});

		return () => {
			typed.destroy();
		};
	}, [isInView]);

	const aboutVariants = {
		enter: {
			y: -10,
			opacity: 0
		},
		center:{
			y: 0,
			opacity: 1
		},
		exit: {
			y: 10,
			opacity: 0
		}
	};
	
	const viewChange = (inView) =>{
		setIsInView(inView);
		if(inView){
			setSelectedNav({Heading: 'ABOUT'});
		}
	}

    return (
		<InView threshold={0.1} onChange={(inView, entry) => viewChange(inView)}>
        <div ref={pageRef} className="w-full md:w-10/12 m-auto grid grid-cols-1 justify-start items-start">
			<motion.h4 variants={headingVariant} initial="hide" animate={isInView? "show":"hide"} exit="hide" className="text-2xl text-green-500 border-l-8 border-green-500 pl-4 pt-8 h-24 tracking-wider">
				<span ref={typedElementForHeading}></span>
			</motion.h4>

			<motion.div variants={containerVariant} initial="hide" animate="show" className="text-gray-500 bg-white p-3 md:p-4 lg:p-10 my-8 rounded-3xl text-lg space-y-3 font-semibold dark:text-gray-200 dark:bg-gray-600">
				<motion.div variants={itemVariant}>
					I'm a 
					<span className="inline-flex justify-start items-center">
						<AnimatePresence exitBeforeEnter>
							<motion.span
								style={{minWidth:'90px'}}
								className="text-green-500 inline mx-2"
								key={scentence}
								variants={aboutVariants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									duartion: 2,
								}}
								> 
								{scentenceList[scentence]}
							</motion.span>
						</AnimatePresence> 
					</span>
						with 5 years of coding and which given me a strong foundation for web development and building complex solutions. 
					I was graduated from University of Bridgeport with a Masters degree in Computer Science. 
					I am passionate about coding and solving problems through code, and I am excited to work alongside 
					other amazing programmers and learn so much more!
				</motion.div>
			</motion.div>
		</div>
		</InView>
    )
}
