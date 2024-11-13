// src/App.js
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<div className={darkMode ? "dark" : ""}>
			<Router>
				<Navbar toggleDarkMode={toggleDarkMode} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/country/:countryCode" element={<CountryDetail />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
