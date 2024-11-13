import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleDarkMode = () => {
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setDarkMode(!darkMode);
	};

	return (
		<HelmetProvider>
			<div className={darkMode ? "dark" : ""}>
				<Router>
					<Navbar toggleDarkMode={toggleDarkMode} mode={darkMode} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/country/:countryCode" element={<CountryDetail />} />
					</Routes>
				</Router>
			</div>
		</HelmetProvider>
	);
};

export default App;
