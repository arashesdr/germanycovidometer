import { createChart } from './chart.action';
import { Dispatch } from 'redux';
import { IStates } from '../../models/country.model';
import { ActionChart, ActionState, ActionStateEmpty } from './actionTypes';

///////////////////////////////////////////////////////////////////////////
//Get a country info include cases, deaths, and recovered, also create chart object
//params: states: countries info | name: supposed country | period: period of info
///////////////////////////////////////////////////////////////////////////
export const getCountry = (states: IStates[], name: string, period: string) => {
	return async (dispatch: Dispatch<ActionState | ActionChart>) => {
		const statesInfo = [...states];
		const stateSelected = statesInfo.filter((item) => item.name === name);

		//Get cases, deaths, and recovered and make an object
		await dispatch({ type: 'LOAD', payload: stateSelected[0] });

		//Create chart object
		const chart = await createChart(stateSelected[0], period);
		await dispatch({ type: 'DRAW', payload: chart });
	};
};

///////////////////////////////////////////////////////////////////////////
//Clear country object
///////////////////////////////////////////////////////////////////////////
export const emptyCountry = () => {
	return async (dispatch: Dispatch<ActionStateEmpty>) => {
		await dispatch({ type: 'EMPTY', payload: [] });
	};
};
