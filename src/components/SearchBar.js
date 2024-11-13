// src/components/SearchBar.js
const SearchBar = ({searchQuery, setSearchQuery, region, setRegion}) => {
	return (
		<div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
			<input
				type="text"
				placeholder="Search for a country..."
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				className="px-4 py-2 border rounded shadow-sm"
			/>
			<select
				value={region}
				onChange={e => setRegion(e.target.value)}
				className="px-4 py-2 border rounded shadow-sm"
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
