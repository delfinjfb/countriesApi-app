// src/utils/api.js
import axios from "axios";
import countryData from "../assets/data.json";

const API_URL = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
	try {
		const response = await axios.get(`${API_URL}/all`);
		return response.data;
	} catch (error) {
		console.warn("API failed, using local data instead.");
		return countryData;
	}
};

export const fetchCountryBycode = async code => {
	return axios.get(`${API_URL}/alpha/${code}`).then(response => response.data);
};
