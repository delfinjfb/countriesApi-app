// src/components/Navbar.js
//import {useState} from "react";

const Navbar = ({toggleDarkMode, mode}) => {
	return (
		<header className="bg-white dark:text-white dark:bg-dark-blue shadow-md py-4 px-8 flex justify-between items-center">
			<h1 className="text-2xl font-bold py-3">Where in the world?</h1>
			<button onClick={toggleDarkMode} className="text-sm">
				<span>{mode ? " ☀️ " : " 🌙 "}</span>
				<span className="text-lg">Dark Mode</span>
			</button>
		</header>
	);
};

export default Navbar;
