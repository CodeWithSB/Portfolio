import React, { useRef, createContext, useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Qualifications from "./Qualifications";
import Contact from "./Contact";
import Footer from "./Footer";
import {
	faHome,
	faUser,
	faCode,
	faProjectDiagram,
	faBusinessTime,
	faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const NavContext = createContext();
function App() {
	const [selectedNav, setSelectedNav] = useState({
		Heading: "HOME",
		Icon: faHome,
		NavIndex: 0,
	});
	const pageRefs = useRef([]);
	const [isDark, setDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const themeFromStorage = localStorage.getItem("theme") === "true";
		if (
			themeFromStorage === true ||
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	const NavItems = [
		{
			Heading: "HOME",
			Icon: faHome,
			NavIndex: 0,
		},
		{
			Heading: "ABOUT",
			Icon: faUser,
			NavIndex: 1,
		},
		{
			Heading: "SKILLS",
			Icon: faCode,
			NavIndex: 2,
		},
		{
			Heading: "PROJECTS",
			Icon: faProjectDiagram,
			NavIndex: 3,
		},
		{
			Heading: "WORKS",
			Icon: faBusinessTime,
			NavIndex: 4,
		},
		{
			Heading: "CONTACT",
			Icon: faPhoneAlt,
			NavIndex: 5,
		},
	];

	const setTheme = (themeValue) => {
		setDarkMode(themeValue);
		localStorage.setItem("theme", themeValue);
	};

	const navItemClick = (navItem) => {
		const selectedNavItem = NavItems.filter(
			(item) => item.Heading === navItem.Heading
		)[0];
		setSelectedNav(selectedNavItem);
		pageRefs.current[selectedNavItem.NavIndex].scrollIntoView({
			behavior: "smooth",
		});
		setIsMenuOpen(false);
	};

	const moveToNextPage = () => {
		const currentNavItem = NavItems.filter(
			(item) => item.Heading === selectedNav.Heading
		)[0];
		const nextNavItem = NavItems.filter(
			(item) =>
				item.NavIndex === (currentNavItem.NavIndex + 1) % NavItems.length
		)[0];
		setSelectedNav(nextNavItem);
		pageRefs.current[nextNavItem.NavIndex].scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<>
			<div
				className={`flex items-stretch overflow-hidden${isDark ? " dark" : ""}`}
			>
				<NavBar
					NavItems={NavItems}
					selectedNav={selectedNav}
					onClick={navItemClick}
					isDark={isDark}
					setDarkMode={() => setTheme(!isDark)}
					isMenuOpen={isMenuOpen}
				/>
				<div className="flex-1 bg-gray-100 dark:bg-gray-800">
					<div className="w-11/12 m-auto px-4 md:pl-16 space-y-32">
						<NavContext.Provider value={setSelectedNav}>
							<Home
								pageRef={(el) => (pageRefs.current = [...pageRefs.current, el])}
							/>
							<About
								pageRef={(el) => (pageRefs.current = [...pageRefs.current, el])}
							/>
							<Skills
								pageRef={(el) => (pageRefs.current = [...pageRefs.current, el])}
							/>
							<Projects
								pageRef={(el) => (pageRefs.current = [...pageRefs.current, el])}
							/>
							<Qualifications
								pageRef={(el) => (pageRefs.current = [...pageRefs.current, el])}
							/>
							<Contact
								pageRef={(el) => (pageRefs.current = [...pageRefs.current, el])}
							/>
						</NavContext.Provider>
					</div>
					<Footer />
				</div>
			</div>
			<div className="fixed right-4 top-4 shadow-lg block md:hidden">
				<HamburgerMenu
					isOpen={isMenuOpen}
					setIsOpen={() => setIsMenuOpen(!isMenuOpen)}
				/>
			</div>
			<div
				className="fixed right-5 bottom-0 hidden md:block animate-bounce hover:animate-none"
				onClick={moveToNextPage}
			>
				<FontAwesomeIcon
					icon={selectedNav.Heading === "CONTACT" ? faArrowUp : faArrowDown}
					className="h-16 w-16 cursor-pointer text-green-500 text-xl"
				/>
			</div>
		</>
	);
}

export default App;
