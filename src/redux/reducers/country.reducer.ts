import { ActionStateEmpty } from './../actions/actionTypes';
import { IStates } from '../../models/country.model';
import { ActionState } from '../actions/actionTypes';

const countryInit: IStates = {
	id: '',
	name: '',
	abbreviation: '',
	cases: 0,
	deaths: 0,
	recovered: 0,
	cases1w: 0,
	cases2w: 0,
	cases3w: 0,
	cases4w: 0,
	detailCases: [],
	detailDeaths: [],
	detailRecovered: [],
};

export const countryReducer = (
	state: IStates = countryInit,
	action: ActionState | ActionStateEmpty
) => {
	switch (action.type) {
		case 'LOAD':
			return action.payload;
		case 'EMPTY':
			return countryInit;
		default:
			return state;
	}
};
