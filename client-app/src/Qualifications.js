import React, { useRef, useEffect, useContext, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapMarkerAlt,
	faUniversity,
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { headingVariant, containerVariant, itemVariant } from "./PageVariants";
import { NavContext } from "./App";
import { InView } from "react-intersection-observer";

export default function Qualifications({ pageRef }) {
	const typedElementForHeading = useRef(null);
	const setSelectedNav = useContext(NavContext);
	const [isInView, setIsInView] = useState(false);

	const qualifications = [
		{
			type: "EDUCATION",
			post: "Bachelors of Technology",
			at: "Test university",
			location: "Test City, TS",
			year: "2011",
		},
		{
			type: "EDUCATION",
			post: "Masters in Computer Science",
			at: "Test State University",
			location: "Bridgeport, CT, USA",
			year: "2015",
		},
		{
			type: "JOB",
			post: "Graduate Teaching Assistant",
			at: "Test State University",
			location: "Bridgeport, CT, USA",
			year: "2016",
		},
		{
			type: "JOB",
			post: "Junior Web Developer",
			at: "Hello Tech.",
			location: "NewYork, NY, USA",
			year: "2017",
		},
		{
			type: "JOB",
			post: "Full Stack Developer",
			at: "Hello Tech, P.C",
			location: "Manhattan, NY, USA",
			year: "2020",
		},
		{
			type: "JOB",
			post: "Senior Web Developer",
			at: "Hello Tech, PLLC",
			location: "Manhattan, NY, USA",
			year: "2021",
		},
	];

	useEffect(() => {
		let typed = new Typed(typedElementForHeading.current, {
			strings: [
				"<span style='font-size: 14px; color: rgba(156, 163, 175)'> BELOW ARE MY </span><br/>QUALIFICATIONS",
			],
			startDelay: 100,
			typeSpeed: 20,
			showCursor: false,
		});

		return () => {
			typed.destroy();
		};
	}, [isInView]);

	const viewChange = (inView) => {
		setIsInView(inView);
		if (inView) {
			setSelectedNav({ Heading: "WORKS" });
		}
	};

	return (
		<InView threshold={0.1} onChange={(inView, entry) => viewChange(inView)}>
			<div
				ref={pageRef}
				className="z-0 w-full md:w-10/12 m-auto grid grid-cols-1 justify-start items-start"
			>
				<motion.h4
					variants={headingVariant}
					initial="hide"
					animate={isInView ? "show" : "hide"}
					exit="hide"
					className="text-2xl text-green-500 border-l-8 border-green-500 pl-4 pt-8 h-24 tracking-wider"
				>
					<span ref={typedElementForHeading}></span>
				</motion.h4>
				<motion.div
					variants={containerVariant}
					initial="hide"
					animate="show"
					className="text-gray-500 p-1 md:p-4 lg:p-10 my-8 bg-white rounded-3xl text-xs dark:text-gray-200 dark:bg-gray-600"
				>
					<div className="relative rounded-xl px-2">
						<div className="absolute rounded-full bg-gray-500 h-full w-0.5 top-1/2 left-14 md:inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
						{qualifications &&
							qualifications.map((singleItem, idx) => (
								<motion.div
									variants={itemVariant}
									key={singleItem.post}
									className={`relative rounded-lg m-0 md:${
										idx % 2 === 0 ? "mr" : "ml"
									}-1/2 my-2`}
								>
									<div
										className={`absolute bg-gray-500 h-3 w-4 top-1/2 left-12 ${
											idx % 2 === 0
												? "right-auto md:-right-4 md:left-auto"
												: "md:left-0"
										} md:left-auto transform -translate-x-1/2 -translate-y-1/2`}
									></div>
									<div
										className={`space-y-1 p-4 ml-24 ${
											idx % 2 === 0 ? "md:mr-16 md:ml-0" : "md:ml-16"
										} rounded-xl shadow-xl border border-gray-500 text-green-500 dark:bg-gray-700`}
									>
										<h3 className="text-sm md:text-base lg:text-lg font-semibold uppercase">
											{" "}
											{singleItem.post}{" "}
										</h3>
										<p className="text-sm text-gray-500 dark:text-50">
											{" "}
											<FontAwesomeIcon
												icon={
													singleItem.type === "JOB" ? faBriefcase : faUniversity
												}
											/>{" "}
											{singleItem.at}{" "}
										</p>
										<p className="text-sm text-gray-500 dark:text-50">
											{" "}
											<FontAwesomeIcon
												icon={faMapMarkerAlt}
												className="mr-1"
											/>{" "}
											{singleItem.location}{" "}
										</p>
									</div>
									<div
										className={`absolute top-1/2 left-12 ${
											idx % 2 === 0 ? "md:right-2 md:left-auto" : "md:left-2"
										} h-0.5 w-12 md:w-14 bg-gray-500 border border-gray-500`}
									></div>
									<p
										className={`absolute top-1/2 left-4 ${
											idx % 2 === 0
												? "md:-right-20 md:left-auto"
												: "md:-left-10"
										} font-bold text-green-500 transform -translate-x-1/2 -translate-y-1/2`}
									>
										{" "}
										{singleItem.year}{" "}
									</p>
								</motion.div>
							))}
					</div>
				</motion.div>
			</div>
		</InView>
	);
}
