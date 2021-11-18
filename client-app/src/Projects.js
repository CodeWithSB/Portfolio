import React, { useRef, useEffect, useContext, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion/dist/framer-motion";
import { headingVariant, containerVariant, itemVariant } from "./PageVariants";
import { NavContext } from "./App";
import { InView } from "react-intersection-observer";

export default function Projects({ pageRef }) {
	const typedElementForHeading = useRef(null);
	const setSelectedNav = useContext(NavContext);
	const [isInView, setIsInView] = useState(false);
	const projectList = [
		{
			name: "Project One",
			technologiesUsed: ["React", "Tailwind"],
			details: [
				"Completely built with hooks and functional components",
				'Emulates time passage, and stock prices update randomly as each "day" passes',
				"Real-time updates on stock and portfolio performance, visualized with interactive charts",
			],
			image1: "https://unsplash.it/500/500?id=1",
			image2: "https://unsplash.it/500/500?id=2",
			image3: "https://unsplash.it/500/500?id=3",
		},
		{
			name: "Project Two",
			technologiesUsed: ["React", "Tailwind"],
			details: [
				"Completely built with hooks and functional components",
				'Emulates time passage, and stock prices update randomly as each "day" passes',
				"Real-time updates on stock and portfolio performance, visualized with interactive charts",
			],
			image1: "https://unsplash.it/500/500?id=1",
			image2: "https://unsplash.it/500/500?id=2",
			image3: "https://unsplash.it/500/500?id=3",
		},
		{
			name: "Project One",
			technologiesUsed: ["React", "Tailwind"],
			details: [
				"Completely built with hooks and functional components",
				'Emulates time passage, and stock prices update randomly as each "day" passes',
				"Real-time updates on stock and portfolio performance, visualized with interactive charts",
			],
			image1: "https://unsplash.it/500/500?id=1",
			image2: "https://unsplash.it/500/500?id=2",
			image3: "https://unsplash.it/500/500?id=3",
		},
		{
			name: "Project Two",
			technologiesUsed: ["React", "Tailwind"],
			details: [
				"Completely built with hooks and functional components",
				'Emulates time passage, and stock prices update randomly as each "day" passes',
				"Real-time updates on stock and portfolio performance, visualized with interactive charts",
			],
			image1: "https://unsplash.it/500/500?id=1",
			image2: "https://unsplash.it/500/500?id=2",
			image3: "https://unsplash.it/500/500?id=3",
		},
	];

	useEffect(() => {
		let typed = new Typed(typedElementForHeading.current, {
			strings: [
				"<span style='font-size: 14px; color: rgba(156, 163, 175)'> TAKE A LOOK AT MY </span><br/>PROJECTS",
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
			setSelectedNav({ Heading: "PROJECTS" });
		}
	};

	return (
		<InView threshold={0.1} onChange={(inView, entry) => viewChange(inView)}>
			<div
				ref={pageRef}
				className="w-full md:w-10/12 m-auto grid grid-cols-1 justify-start items-start"
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
					className="text-gray-500 p-5 lg:p-10 my-8 bg-white rounded-3xl text-xs flex flex-wrap space-y-10 dark:text-gray-200 dark:bg-gray-600"
				>
					{projectList &&
						projectList.map((project, idx) => (
							<motion.div
								variants={itemVariant}
								className="w-full h-full shadow-lg grid grid-cols-1 grid-rows-none lg:grid-cols-6 lg:grid-rows-2 text-lg p-4 gap-4 rounded-xl dark:bg-gray-700"
							>
								<div className="rounded-lg lg:col-span-3 lg:row-span-2">
									<h3 className="text-2xl uppercase font-semibold my-2">
										{" "}
										{project.name}{" "}
									</h3>
									<p className="text-base font-semibold">
										Technologies Used:{" "}
										<span className="text-green-500">
											{" "}
											{project.technologiesUsed.join(", ")}{" "}
										</span>{" "}
									</p>
									<ul className="m-2 pl-4 text-base space-y-1 list-disc">
										{project.details.map((projectDetail) => (
											<li>{projectDetail}</li>
										))}
									</ul>
								</div>
								{idx % 2 === 0 && (
									<>
										<img
											className="rounded-lg w-full h-full lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-2 object-cover"
											src={project.image1}
											alt={project.name + " Image"}
										/>
										<img
											className="rounded-lg w-full h-full hidden lg:block lg:col-start-6 lg:row-start-1 object-cover"
											src={project.image2}
											alt={project.name + " Image"}
										/>
										<img
											className="rounded-lg w-full h-full hidden lg:block lg:col-start-6 lg:row-start-2 object-cover"
											src={project.image3}
											alt={project.name + " Image"}
										/>
									</>
								)}
								{idx % 2 === 1 && (
									<>
										<img
											className="rounded-lg w-full h-full hidden lg:block lg:col-start-4 lg:row-start-1 object-cover"
											src={project.image1}
											alt={project.name + " Image"}
										/>
										<img
											className="rounded-lg w-full h-full hidden lg:block lg:col-start-4 lg:row-start-2 object-cover"
											src={project.image2}
											alt={project.name + " Image"}
										/>
										<img
											className="rounded-lg w-full h-full lg:col-start-5 lg:row-start-1 lg:col-span-2 lg:row-span-2 object-cover"
											src={project.image3}
											alt={project.name + " Image"}
										/>
									</>
								)}
							</motion.div>
						))}
				</motion.div>
			</div>
		</InView>
	);
}
