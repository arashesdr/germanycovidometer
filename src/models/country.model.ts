export interface IHistory {
	count?: number;
	date?: string;
}

export interface IStates {
	date?: string;
	id: string;
	name: string;
	abbreviation?: string;
	cases: number;
	deaths: number;
	recovered: number;
	history?: any;
	cases1w?: number;
	deaths1w?: number;
	recovered1w?: number;
	cases2w?: number;
	deaths2w?: number;
	recovered2w?: number;
	cases3w?: number;
	deaths3w?: number;
	recovered3w?: number;
	cases4w?: number;
	deaths4w?: number;
	recovered4w?: number;
	detailCases: IHistory[];
	detailDeaths: IHistory[];
	detailRecovered: IHistory[];
}

export interface INation {
	date?: string;
	cases: number;
	deaths: number;
	recovered: number;
	cases1w?: number;
	deaths1w?: number;
	recovered1w?: number;
	cases2w?: number;
	deaths2w?: number;
	recovered2w?: number;
	cases3w?: number;
	deaths3w?: number;
	recovered3w?: number;
	cases4w?: number;
	deaths4w?: number;
	recovered4w?: number;
	detailCases: IHistory[];
	detailDeaths: IHistory[];
	detailRecovered: IHistory[];
}

export interface IChart {
	name?: string;
	uv?: number;
	pv?: number;
	amt?: number;
}
