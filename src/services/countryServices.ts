import { server } from './server';

///////////////////////////////////////////////////////////////////////////
//Get countries of a nation cases info by day
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const fetchCountriesCasesInfoByDays = (days: number) => {
	const url = `states/history/cases/${days}`;

	return server.get(url);
};

///////////////////////////////////////////////////////////////////////////
//Get countries of a nation recovered info by day
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const fetchCountriesRecoverdInfoByDays = (days: number) => {
	const url = `states/history/recovered/${days}`;

	return server.get(url);
};

///////////////////////////////////////////////////////////////////////////
//Get countries of a nation deaths info by day
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const fetchCountriesDeathsInfoByDays = (days: number) => {
	const url = `states/history/deaths/${days}`;

	return server.get(url);
};
