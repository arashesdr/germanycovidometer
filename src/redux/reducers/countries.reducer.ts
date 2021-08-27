import { IStates } from '../../models/country.model';
import { ActionStates } from '../actions/actionTypes';

export const countriesReducer = (
	state: IStates[] = [],
	action: ActionStates
) => {
	switch (action.type) {
		case 'INIT': {
			return [...action.payload];
		}
		default:
			return state;
	}
};
