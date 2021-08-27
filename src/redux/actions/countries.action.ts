import { Dispatch } from 'redux';
import { toast } from 'react-toastify';
import { IHistory, IStates } from './../../models/country.model';
import {
	fetchCountriesCasesInfoByDays,
	fetchCountriesDeathsInfoByDays,
	fetchCountriesRecoverdInfoByDays,
} from '../../services/countryServices';
import { ActionStates } from './actionTypes';

///////////////////////////////////////////////////////////////////////////
//Get countries of a nation(Germany) info include cases, deaths, and recovered
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const getCountries = (days: number) => {
	return async (dispatch: Dispatch<ActionStates>) => {
		try {
			//Get cases, deaths, and recovered via API and make an object
			const result = await setCountries(days);

			await dispatch({ type: 'INIT', payload: result });
		} catch (err) {
			toast.error(
				'There is a problem on fetching information, please try later.'
			);
		}
	};
};

///////////////////////////////////////////////////////////////////////////
//Get cases, deaths, and recovered via API cases, recovered, and deaths history API and make an object
//params: days: days count
///////////////////////////////////////////////////////////////////////////
const setCountries = async (days: number) => {
	const result: IStates[] = [];

	//Get countries cases via API
	const resCases = await fetchCountriesCasesInfoByDays(28);
	const countriesCases: IStates[] = Object.values(resCases.data.data);
	countriesCases.map((item) => {
		let totalCases1week: number = 0;
		let totalCases2week: number = 0;
		let totalCases3week: number = 0;
		let totalCases4week: number = 0;

		//calculate total of countries cases for 1,2,3,4 weeks
		const casesDetail: IHistory[] = [];
		item.history.map((currentValue: IStates, index: number) => {
			if (index >= 21) totalCases1week += currentValue.cases;
			if (index >= 14) totalCases2week += currentValue.cases;
			if (index >= 7) totalCases3week += currentValue.cases;
			totalCases4week += currentValue.cases;

			//add cases day by day
			const detail: IHistory = {};
			detail.count = currentValue.cases;
			detail.date = currentValue.date;
			casesDetail.push(detail);

			return 0;
		});

		//Init and add cases objects to a single object
		const newItem = {
			id: item.id,
			name: item.name,
			cases1w: totalCases1week,
			cases2w: totalCases2week,
			cases3w: totalCases3week,
			cases4w: totalCases4week,
			deaths1w: 0,
			deaths2w: 0,
			deaths3w: 0,
			deaths4w: 0,
			recovered1w: 0,
			recovered2w: 0,
			recovered3w: 0,
			recovered4w: 0,
			cases: 0,
			deaths: 0,
			recovered: 0,
			detailCases: casesDetail,
			detailDeaths: [],
			detailRecovered: [],
		};

		result.push(newItem);

		return true;
	});

	//Get deaths deaths via API
	const resDeaths = await fetchCountriesDeathsInfoByDays(days);
	const countriesDeaths: IStates[] = Object.values(resDeaths.data.data);

	countriesDeaths.map((item) => {
		let totalDeaths1week: number = 0;
		let totalDeaths2week: number = 0;
		let totalDeaths3week: number = 0;
		let totalDeaths4week: number = 0;

		//calculate total of countries deaths for 1,2,3,4 weeks
		const deathsDetail: IHistory[] = [];
		item.history.map((currentValue: IStates, index: number) => {
			if (index >= 21) totalDeaths1week += currentValue.deaths;
			if (index >= 14) totalDeaths2week += currentValue.deaths;
			if (index >= 7) totalDeaths3week += currentValue.deaths;
			totalDeaths4week += currentValue.deaths;

			//add deaths day by day
			const detail: IHistory = {};
			detail.count = currentValue.deaths;
			detail.date = currentValue.date;
			deathsDetail.push(detail);
			return 0;
		});

		//add deaths objects to a single object
		const countryIndex: number = result.findIndex((i) => i.name === item.name);
		const country = result[countryIndex];
		country.deaths1w = totalDeaths1week;
		country.deaths2w = totalDeaths2week;
		country.deaths3w = totalDeaths3week;
		country.deaths4w = totalDeaths4week;
		country.detailDeaths = deathsDetail;
		result[countryIndex] = country;

		return true;
	});

	//Get recovered recovered via API
	const resRecovered = await fetchCountriesRecoverdInfoByDays(days);
	const countriesRecovered: IStates[] = Object.values(resRecovered.data.data);
	countriesRecovered.map((item) => {
		let totalRecovered1week: number = 0;
		let totalRecovered2week: number = 0;
		let totalRecovered3week: number = 0;
		let totalRecovered4week: number = 0;

		//calculate total of countries recovered for 1,2,3,4 weeks
		const recoveredDetail: IHistory[] = [];
		item.history.map((currentValue: IStates, index: number) => {
			if (index >= 21) totalRecovered1week += currentValue.recovered;
			if (index >= 14) totalRecovered2week += currentValue.recovered;
			if (index >= 7) totalRecovered3week += currentValue.recovered;
			totalRecovered4week += currentValue.recovered;

			//add recovered day by day
			const detail: IHistory = {};
			detail.count = currentValue.recovered;
			detail.date = currentValue.date;
			recoveredDetail.push(detail);
			return 0;
		});

		//add recovered objects to a single object
		const countryIndex: number = result.findIndex((i) => i.name === item.name);
		const country = result[countryIndex];
		country.recovered1w = totalRecovered1week;
		country.recovered2w = totalRecovered2week;
		country.recovered3w = totalRecovered3week;
		country.recovered4w = totalRecovered4week;
		country.detailRecovered = recoveredDetail;
		result[countryIndex] = country;

		return true;
	});

	return result;
};
