// src/components/SearchBar.js
import {FaSearch} from "react-icons/fa"; // Import the search icon from Font Awesome

const SearchBar = ({searchQuery, setSearchQuery, region, setRegion}) => {
	return (
		<div className="flex flex-col md:flex-row justify-between gap-4 my-10 pb-4">
			<div className="relative w-full md:w-auto">
				<FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-white ml-8" />
				<input
					type="text"
					placeholder="Search for a country..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					className="px-20 py-4  border rounded shadow-sm text-lg w-full md:w-64 dark:bg-dark-blue dark:text-white dark:border-0 "
				/>
			</div>
			<select
				aria-label="Filter by Region"
				value={region}
				onChange={e => setRegion(e.target.value)}
				className="px-4 py-2 border rounded shadow-sm w-full md:w-auto dark:bg-dark-blue dark:text-white dark:border-0"
			>
				<option value="">Filter by Region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	);
};

export default SearchBar;
