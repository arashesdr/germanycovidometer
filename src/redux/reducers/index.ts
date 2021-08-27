import { chartReducer } from './chart.reducer';
import { statisticsPeriodReducer } from './statisticsPeriod.reducer';
import { nationReducer } from './nation.reducer';
import { combineReducers } from 'redux';
import { countryReducer } from './country.reducer';
import { countriesReducer } from './countries.reducer';

export const reducers = combineReducers({
	countries: countriesReducer,
	country: countryReducer,
	nation: nationReducer,
	statisticsPeriod: statisticsPeriodReducer,
	chart: chartReducer,
});
