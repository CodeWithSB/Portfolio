import React, { useRef, useEffect, useContext, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion/dist/framer-motion";
import HtmlIcon from "./assets/html.svg";
import CssIcon from "./assets/css.svg";
import SassIcon from "./assets/sass.svg";
import BootstrapIcon from "./assets/bootstrap.png";
import TailwindIcon from "./assets/Tailwind.png";
import JavascriptIcon from "./assets/javascript.svg";
import TypescriptIcon from "./assets/TypeScript.png"
import JQueryIcon from "./assets/jquery.svg";
import ReactIcon from "./assets/react.svg";
import NodeJsIcon from "./assets/NodeJS.png";
import CSharpIcon from "./assets/csharp.svg";
import BlazorIcon from "./assets/blazor.svg";
import DotNetIcon from "./assets/dotnet.png";
import GraphQLIcon from "./assets/graphql.png";
import SqlServerIcon from "./assets/SqlServer.png";
import MySqlIcon from "./assets/mysql.svg";
import EntityFrameworkIcon from "./assets/entity-framework.png";
import TypeOrmIcon from "./assets/typeORM.png";
import ApiIcon from "./assets/api.svg";
import GitIcon from "./assets/git.svg";
import VsCodeIcon from "./assets/vscode.svg";
import NPMIcon from "./assets/npm.svg";
import YarnIcon from "./assets/Yarn.png";
import {headingVariant, containerVariant, itemVariant} from "./PageVariants";
import { NavContext } from "./App";
import { InView } from 'react-intersection-observer';

export default function Skills({pageRef}) {
    const typedElementForHeading = useRef(null);
	const setSelectedNav = useContext(NavContext);
	const [isInView, setIsInView] = useState(false);
    const skillsList = [
        {
            Image: HtmlIcon,
            Name: 'HTML',
            Rating: 10,
            Color: 'rgb(228 77 38)'
        }, 
        {
            Image: CssIcon,
            Name: 'CSS',
            Rating: 8,
            Color: 'rgb(38 77 228)'
        }, 
        {
            Image: SassIcon,
            Name: 'Sass',
            Rating: 7,
            Color: 'rgb(210 111 161)'
        }, 
        {
            Image: BootstrapIcon,
            Name: 'Bootstrap',
            Rating: 9,
            Color:'rgb(139 11 252)'
        }, 
        {
            Image: TailwindIcon,
            Name: 'Tailwind',
            Rating: 9,
            Color: 'rgb(22 189 202)'
        }, 
        {
            Image: TypescriptIcon,
            Name: 'Typescript',
            Rating: 9,
            Color: 'rgb(45 121 199)'
        }, 
        {
            Image: JavascriptIcon,
            Name: 'Javascript',
            Rating: 9,
            Color: 'rgb(247 223 30)'
        }, 
        {
            Image: JQueryIcon,
            Name: 'JQuery',
            Rating: 9,
            Color: 'rgb(33 96 155)'
        }, 
        {
            Image: ReactIcon,
            Name: 'React',
            Rating: 9,
            Color: 'rgb(103 219 251)'
        }, 
        {
            Image: NodeJsIcon,
            Name: 'Node JS',
            Rating: 9,
            Color: 'rgb(95 165 81)'
        }, 
        {
            Image: CSharpIcon,
            Name: 'C#',
            Rating: 9,
            Color: 'rgb(154 73 147)'
        }, 
        {
            Image: BlazorIcon,
            Name: 'Blazor',
            Rating: 9,
            Color: 'rgb(112 42 247)'
        }, 
        {
            Image: DotNetIcon,
            Name: '.NET',
            Rating: 9,
            Color: 'rgb(80 39 213)'
        }, 
        {
            Image: GraphQLIcon,
            Name: 'GraphQL',
            Rating: 9,
            Color: 'rgb(231 56 175)'
        }, 
        {
            Image: SqlServerIcon,
            Name: 'SQL Server',
            Rating: 9,
            Color: 'rgb(203 108 107)'
        }, 
        {
            Image: MySqlIcon,
            Name: 'MySql',
            Rating: 9,
            Color: 'rgb(50 118 136)'
        }, 
        {
            Image: EntityFrameworkIcon,
            Name: 'Entity Framework',
            Rating: 9,
            Color: 'rgb(103 32 121)'
        }, 
        {
            Image: TypeOrmIcon,
            Name: 'Type ORM',
            Rating: 9,
            Color: 'rgb(237 95 79)'
        }, 
        {
            Image: ApiIcon,
            Name: 'REST APIs',
            Rating: 9,
            Color: 'rgb(64 122 222)'
        }, 
        {
            Image: GitIcon,
            Name: 'Git',
            Rating: 9,
            Color: 'rgb(222 76 54)'
        }, 
        {
            Image: VsCodeIcon,
            Name: 'VS Code',
            Rating: 9,
            Color: 'rgb(36 137 202)'
        }, 
        {
            Image: NPMIcon,
            Name: 'npm',
            Rating: 9,
            Color:'rgb(203 56 55)'
        }, 
        {
            Image: YarnIcon,
            Name: 'yarn',
            Rating: 9,
            Color: 'rgb(54 143 185)'
        }, 
    ]
    
	useEffect(() => {
		let typed = new Typed(typedElementForHeading.current, {
			strings: ["<span style='font-size: 14px; color: rgba(156, 163, 175)'>CHECKOUT MY</span><br/>SKILLS"],
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
			setSelectedNav({Heading: 'SKILLS'});
		}
	}

    return (
		<InView threshold={0.1} onChange={(inView, entry) => viewChange(inView)}>
            <div ref={pageRef} className="w-full md:w-10/12 m-auto grid grid-cols-1 justify-start items-start">
                <motion.h4 variants={headingVariant} initial="hide" animate={isInView? "show":"hide"} exit="hide" className="text-2xl text-green-500 border-l-8 border-green-500 pl-4 pt-8 h-24 tracking-wider">
                    <span ref={typedElementForHeading}></span>
                </motion.h4>
                <motion.div variants={containerVariant} initial="hide" animate="show" className="text-gray-500 p-1 md:p-4 lg:p-10 my-8 bg-white rounded-3xl text-xs flex flex-wrap dark:text-gray-200 dark:bg-gray-600">
                    {
                        skillsList && skillsList.map(skill => (
                            <motion.div variants={itemVariant} key={skill.Name} className="w-20 h-24 flex flex-col justify-center rounded-lg p-2 text-center m-4 border border-gray-100 dark:border-gray-700 dark:bg-gray-700 space-y-1 hover:shadow-xl">
                                <img src={skill.Image} alt={skill.Name} className="mx-auto w-8 h-8"/>
                                <h5 className="font-semibold text-xs">{skill.Name}</h5>
                                <div className="h-1.5 border border-gray-300 dark:border-gray-500 w-full rounded-full" style={{ background: `linear-gradient(to right, ${skill.Color} ${10*skill.Rating}%, white ${100-(10*skill.Rating)}%)` }}></div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </InView>
    )
}
