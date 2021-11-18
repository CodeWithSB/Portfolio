import React, { useRef, useEffect, useContext, useState } from "react";
import Typed from "typed.js";
import ProfileBackground from "./assets/ProfileBackground.svg";
import ResumeFile from "./assets/Resume.pdf";
import { motion } from "framer-motion/dist/framer-motion";
import { headingVariant } from "./PageVariants";
import { NavContext } from "./App";
import { InView } from "react-intersection-observer";

export default function Home({ pageRef }) {
	const typedElementForGreeting = useRef(null);
	const setSelectedNav = useContext(NavContext);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		let typed = new Typed(typedElementForGreeting.current, {
			strings: [
				"<span style='font-size: 14px; color: rgba(156, 163, 175)'>HI, THERE! I'M </span><br/>JOHN DOE",
			],
			startDelay: 500,
			typeSpeed: 80,
			showCursor: false,
		});

		return () => {
			typed.destroy();
		};
	}, [isInView]);

	const viewChange = (inView) => {
		setIsInView(inView);
		if (inView) {
			setSelectedNav({ Heading: "HOME" });
		}
	};

	return (
		<InView threshold={0.1} onChange={(inView, entry) => viewChange(inView)}>
			<div
				ref={pageRef}
				className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-center"
			>
				<img
					src={ProfileBackground}
					alt="ProfileBackground"
					className="w-full py-4 md:w-3/4"
				/>
				<div className="w-full py-4">
					<motion.h4
						variants={headingVariant}
						initial="hide"
						animate={isInView ? "show" : "hide"}
						exit="hide"
						className="text-3xl text-green-500 border-l-8 border-green-500 pl-4 h-24 tracking-wider"
					>
						<span ref={typedElementForGreeting}></span>
						<span className="animate-ping text-gray-500 font-normal">| </span>
					</motion.h4>
					<motion.p
						initial={{ y: "20px", opacity: 0 }}
						animate={
							isInView ? { y: 0, opacity: 1 } : { y: "20px", opacity: 0 }
						}
						transition={{ duration: 0.28 }}
						className="text-gray-500 my-8 dark:text-gray-200"
					>
						I'm currently a C# developer at a law firm called TMP, PLLC where I
						help customize our codebase to fit new client needs and develop
						applications that the proprietary software cannot handle. Advocating
						for diversity and inclusion is something that's very important to
						me, and hopefully I will always be part of an organization that
						promotes these aspects.
					</motion.p>
					<motion.div
						initial={{ y: "20px", opacity: 0 }}
						animate={
							isInView ? { y: 0, opacity: 1 } : { y: "20px", opacity: 0 }
						}
						transition={{ duration: 0.28 }}
						className="flex justify-between"
					>
						<a
							href={ResumeFile}
							download="Resume.pdf"
							className="hover:shadow-xl px-6 py-2 text-white rounded-full bg-green-500 font-semibold text-center"
						>
							Resum&eacute;
						</a>
					</motion.div>
				</div>
			</div>
		</InView>
	);
}
