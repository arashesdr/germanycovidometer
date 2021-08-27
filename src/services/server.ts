import axios from 'axios';

//* Server configs
//API for fetching Germany Covid-19 statistics via https://api.corona-zahlen.org/docs/
export const server = axios.create({
	baseURL: 'https://api.corona-zahlen.org/',
	headers: {
		'Content-Type': 'application/json',
	},
});
