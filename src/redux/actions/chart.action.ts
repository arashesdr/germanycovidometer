import Moment from 'moment';
import { Dispatch } from 'redux';
import {
	IStates,
	INation,
	IChart,
	IHistory,
} from './../../models/country.model';
import { ActionChart } from './actionTypes';

///////////////////////////////////////////////////////////////////////////
//Make chart object
//params: states: countries/nation info | period: period of info
///////////////////////////////////////////////////////////////////////////
export const drawChart = (states: IStates | INation, period: string) => {
	return async (dispatch: Dispatch<ActionChart>) => {
		const chartBuild = await createChart(states, period);

		await dispatch({ type: 'DRAW', payload: chartBuild });
	};
};

///////////////////////////////////////////////////////////////////////////
//Make chart object in a period
//params: states: countries/nation info | period: period of info
///////////////////////////////////////////////////////////////////////////
export const createChart = (states: IStates | INation, period: string) => {
	const chartBuild: IChart[] = [];

	let start: number = 0;
	switch (period) {
		case '1 week ago':
			start = 21;
			break;
		case '2 weeks ago':
			start = 14;
			break;
		case '3 weeks ago':
			start = 7;
			break;
		case '4 weeks ago':
			start = 0;
			break;
	}

	states.detailCases
		?.slice(start, states.detailCases.length)
		.map((item: IHistory, index: number) => {
			let week1Info: any = {};
			week1Info.name = Moment(item.date).format('L');
			week1Info.uv = item.count;

			const deaths: IHistory = states.detailDeaths[index];
			week1Info.pv = deaths.count;

			const recovered: IHistory = states.detailRecovered[index];
			week1Info.amt = recovered.count;
			chartBuild.push(week1Info);

			return true;
		});
	return chartBuild;
};
