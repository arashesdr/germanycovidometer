import { IStates } from '../../models/country.model';
import { ActionstatisticsPeriod } from '../actions/actionTypes';

export const statisticsPeriodReducer = (
	state: IStates[] = [],
	action: ActionstatisticsPeriod
) => {
	switch (action.type) {
		case 'PERIOD': {
			return action.payload;
		}
		default:
			return state;
	}
};
