// src/components/Navbar.js
import {useState} from "react";

const Navbar = ({toggleDarkMode}) => {
	return (
		<header className="bg-white dark:bg-dark-blue shadow-md py-4 px-8 flex justify-between items-center">
			<h1 className="text-xl font-bold">Where in the world?</h1>
			<button onClick={toggleDarkMode} className="text-sm">
				Toggle Dark Mode
			</button>
		</header>
	);
};

export default Navbar;
