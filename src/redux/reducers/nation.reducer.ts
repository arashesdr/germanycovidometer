import { INation } from '../../models/country.model';
import { ActionNation } from '../actions/actionTypes';

// const nationInit = {
// 	cases: '',
// 	deaths: '',
// 	recovered: '',
// 	weekIncidence: '',
// 	casesPer100k: '',
// 	casesPerWeek: '',
// 	delta: {
// 		cases: '',
// 		deaths: '',
// 		recovered: '',
// 	},
// 	r: {
// 		value: '',
// 		rValue4Days: {
// 			value: '',
// 			date: '',
// 		},
// 		rValue7Days: {
// 			value: '',
// 			date: '',
// 		},
// 		lastUpdate: '',
// 	},
// };

const nationInit = {
	cases: 0,
	deaths: 0,
	recovered: 0,
	detailCases: [],
	detailDeaths: [],
	detailRecovered: [],
};

export const nationReducer = (
	state: INation = nationInit,
	action: ActionNation
) => {
	switch (action.type) {
		case 'GET': {
			return action.payload;
		}
		default:
			return state;
	}
};
