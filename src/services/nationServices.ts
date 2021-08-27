import { server } from './server';

///////////////////////////////////////////////////////////////////////////
//Get nation(Germany) cases info by day
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const fetchNationCasesInfoByDays = (days: number) => {
	const url = `germany/history/cases/${days}`;

	return server.get(url);
};

///////////////////////////////////////////////////////////////////////////
//Get nation(Germany) recovered info by day
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const fetchNationRecoverdInfoByDays = (days: number) => {
	const url = `germany/history/recovered/${days}`;

	return server.get(url);
};

///////////////////////////////////////////////////////////////////////////
//Get nation(Germany) deaths info by day
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const fetchNationDeathsInfoByDays = (days: number) => {
	const url = `germany/history/deaths/${days}`;

	return server.get(url);
};
