///////////////////////////////////////////////////////////////////////////
//Get the period of statistics
//params: periodType: perion(1 week ago, 2 weeks ago, 3 weeks ago, 4 weeks ago)
///////////////////////////////////////////////////////////////////////////
export const getStatisticsPeriod = (periodType: string) => {
	return {
		type: 'PERIOD',
		payload: periodType,
	};
};
