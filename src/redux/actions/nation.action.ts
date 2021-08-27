import { IHistory } from './../../models/country.model';
import { ActionNation } from './actionTypes';
import {
	fetchNationCasesInfoByDays,
	fetchNationDeathsInfoByDays,
	fetchNationRecoverdInfoByDays,
} from '../../services/nationServices';
import { Dispatch } from 'redux';
import { INation } from '../../models/country.model';
import { toast } from 'react-toastify';

///////////////////////////////////////////////////////////////////////////
//Get nation(Germany) info include cases, deaths, and recovered
//params: days: days count
///////////////////////////////////////////////////////////////////////////
export const getNationByDays = (days: number) => {
	return async (dispatch: Dispatch<ActionNation>) => {
		try {
			//Get cases, deaths, and recovered via API and make an object
			const result = await setNation(days);

			await dispatch({ type: 'GET', payload: result });
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
const setNation = async (days: number) => {
	//Get nation cases via API
	const resCases = await fetchNationCasesInfoByDays(days);

	let totalCases1week: number = 0;
	let totalCases2week: number = 0;
	let totalCases3week: number = 0;
	let totalCases4week: number = 0;

	//calculate total of cases for 1,2,3,4 weeks
	const casesDetail: IHistory[] = [];
	resCases.data.data.map((currentValue: INation, index: number) => {
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

	//Get nation deathes via API
	const resDeaths = await fetchNationDeathsInfoByDays(days);

	let totalDeaths1week: number = 0;
	let totalDeaths2week: number = 0;
	let totalDeaths3week: number = 0;
	let totalDeaths4week: number = 0;

	//calculate total of deaths for 1,2,3,4 weeks
	const deathsDetail: IHistory[] = [];
	resDeaths.data.data.map((currentValue: INation, index: number) => {
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

	//Get nation recovered via API
	const resRecovered = await fetchNationRecoverdInfoByDays(days);
	let totalRecovered1week: number = 0;
	let totalRecovered2week: number = 0;
	let totalRecovered3week: number = 0;
	let totalRecovered4week: number = 0;

	//calculate total of recovered for 1,2,3,4 weeks
	const recoveredDetail: IHistory[] = [];
	resRecovered.data.data.map((currentValue: INation, index: number) => {
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

	//add created objects to a single object
	const result = {
		cases1w: totalCases1week,
		cases2w: totalCases2week,
		cases3w: totalCases3week,
		cases4w: totalCases4week,
		deaths1w: totalDeaths1week,
		deaths2w: totalDeaths2week,
		deaths3w: totalDeaths3week,
		deaths4w: totalDeaths4week,
		recovered1w: totalRecovered1week,
		recovered2w: totalRecovered2week,
		recovered3w: totalRecovered3week,
		recovered4w: totalRecovered4week,
		cases: 0,
		deaths: 0,
		recovered: 0,
		detailCases: casesDetail,
		detailDeaths: deathsDetail,
		detailRecovered: recoveredDetail,
	};

	return result;
};
