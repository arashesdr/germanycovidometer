import { IChart } from './../../models/country.model';
import { ActionChart } from './../actions/actionTypes';

const countryInit: IChart = {
	name: '',
	pv: 0,
	uv: 0,
	amt: 0,
};

export const chartReducer = (
	state: IChart = countryInit,
	action: ActionChart
) => {
	switch (action.type) {
		case 'DRAW':
			return [...action.payload];
		default:
			return state;
	}
};
