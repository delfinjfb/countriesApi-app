// src/pages/CountryDetail.js
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {fetchCountryBycode} from "../utils/api";
import data from "../assets/data.json";

const CountryDetail = () => {
	const {countryCode} = useParams();
	const navigate = useNavigate();
	const [country, setCountry] = useState(null);

	useEffect(() => {
		const fetchCountry = async () => {
			try {
				// Fetch from the API
				const data = await fetchCountryBycode(countryCode);
				setCountry(data[0]);
			} catch (error) {
				// Fallback to data.json if the API fails
				const fallbackCountry = data.find(c => c.cca3 === countryCode);
				setCountry(fallbackCountry);
			}
		};

		fetchCountry();
	}, [countryCode]);

	if (!country) return <div>Loading...</div>;

	// Helper functions to format data
	const formatNumber = num => num.toLocaleString();
	const getCurrencies = country => {
		return country.currencies
			? Object.values(country.currencies)
					.map(currency => currency.name)
					.join(", ")
			: "N/A";
	};
	const getLanguages = country => {
		return country.languages
			? Object.values(country.languages).join(", ")
			: "N/A";
	};
	const getBorderCountries = borders => {
		return borders.map(borderCode => {
			const borderCountry = data.find(c => c.cca3 === borderCode);
			return borderCountry ? borderCountry.name.common : borderCode;
		});
	};

	return (
		<main className="container mx-auto p-4 dark:text-white">
			<Helmet>
				<title>{country.name.common} - REST Countries</title>{" "}
				{/* Dynamic title */}
				<meta
					name="description"
					content={`Details about ${country.name.common}`}
				/>
			</Helmet>
			{/* Back button */}
			<button
				onClick={() => navigate(-1)}
				className="btn mb-8 rounded shadow-custom px-4"
			>
				← Back
			</button>

			{/* Country Details Section */}
			<div className="flex flex-col lg:flex-row gap-10">
				{/* Flag Image */}
				<img
					src={country.flags.png}
					alt={`${country.name.common} flag`}
					className="w-full lg:w-1/2 object-cover rounded-md"
				/>

				{/* Details Section */}
				<div className="lg:w-1/2 flex flex-col justify-center">
					<h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
						{/* Column 1 */}
						<div>
							<p>
								<strong>Native Name:</strong>{" "}
								{country.name.nativeName
									? Object.values(country.name.nativeName)[0].common
									: country.name.common}
							</p>
							<p>
								<strong>Population:</strong> {formatNumber(country.population)}
							</p>
							<p>
								<strong>Region:</strong> {country.region}
							</p>
							<p>
								<strong>Sub Region:</strong> {country.subregion}
							</p>
							<p>
								<strong>Capital:</strong>{" "}
								{country.capital ? country.capital[0] : "N/A"}
							</p>
						</div>

						{/* Column 2 */}
						<div>
							<p>
								<strong>Top Level Domain:</strong>{" "}
								{country.tld ? country.tld.join(", ") : "N/A"}
							</p>
							<p>
								<strong>Currencies:</strong> {getCurrencies(country)}
							</p>
							<p>
								<strong>Languages:</strong> {getLanguages(country)}
							</p>
						</div>
					</div>

					{/* Border Countries */}
					{country.borders && country.borders.length > 0 && (
						<div>
							<strong>Border Countries:</strong>
							<div className="flex flex-wrap gap-2 mt-2">
								{getBorderCountries(country.borders).map(
									(borderCountry, index) => (
										<Link
											to={`/country/${country.borders[index]}`}
											key={index}
											className="px-4 py-2 rounded shadow-md dark:bg-dark-blue"
										>
											{borderCountry}
										</Link>
									)
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default CountryDetail;
