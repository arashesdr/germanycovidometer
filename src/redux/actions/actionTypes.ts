import { IChart } from './../../models/country.model';
import { IStates, INation } from '../../models/country.model';

//Coutry action return an array of counries object
export type ActionStates = { type: 'INIT'; payload: IStates[] };

//Coutry action return an object of a country info
export type ActionState = { type: 'LOAD'; payload: IStates };

//Coutry action return an empty object of country
export type ActionStateEmpty = { type: 'EMPTY'; payload: IStates[] };

//Nation action return an empty object of nation
export type ActionNation = { type: 'GET'; payload: INation };

//Period action return an empty object of statistics period
export type ActionstatisticsPeriod = { type: 'PERIOD'; payload: string };

//Chart action return a object of chart data
export type ActionChart = { type: 'DRAW'; payload: IChart[] };
