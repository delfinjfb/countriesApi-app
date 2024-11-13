// src/pages/Home.js
import {useState, useEffect} from "react";
import {fetchAllCountries} from "../utils/api";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [region, setRegion] = useState("");

	useEffect(() => {
		fetchAllCountries().then(setCountries);
	}, []);

	const filteredCountries = countries
		.filter(country =>
			country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
		)
		.filter(country => region === "" || country.region === region);

	return (
		<main className="container dark-blue mx-auto p-4 dark:bg-very-dark-blue">
			<SearchBar
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				region={region}
				setRegion={setRegion}
			/>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 dark:bg-dark-blue">
				{filteredCountries.map(country => (
					<CountryCard key={country.cca3} country={country} />
				))}
			</div>
		</main>
	);
};

export default Home;
