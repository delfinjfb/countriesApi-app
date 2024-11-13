// src/components/CountryCard.js
import {Link} from "react-router-dom";

const CountryCard = ({country}) => {
	return (
		<Link
			to={`/country/${country.cca3}`}
			className="block bg-white dark:bg-dark-blue dark:text-white shadow-md p-0 mb-16 rounded-t-lg "
		>
			<img
				src={country.flags.png}
				alt={`${country.name.common} flag`}
				className="w-full h-44 object-cover rounded-t-lg"
			/>
			<div className="m-6">
				<h2 className="font-bold text-xl my-4">{country.name.common}</h2>
				<p>
					<strong className=" font-medium">Population:</strong>{" "}
					{country.population.toLocaleString()}
				</p>
				<p>
					<strong>Region:</strong> {country.region}
				</p>
				<p className="mb-12">
					<strong>Capital:</strong> {country.capital?.[0]}
				</p>
			</div>
		</Link>
	);
};

export default CountryCard;
