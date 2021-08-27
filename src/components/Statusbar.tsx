import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { drawChart } from '../redux/actions/chart.action';
import { emptyCountry, getCountry } from '../redux/actions/country.action';
import { getStatisticsPeriod } from '../redux/actions/statisticsPeriod.action';
import { RootStore } from '../redux/store/store';

const Statusbar: React.FC = () => {
	const countries = useSelector((store: RootStore) => store.countries);
	const countryInfo = useSelector((store: RootStore) => store.country);
	const nationInfo = useSelector((store: RootStore) => store.nation);
	const periodType = useSelector((store: RootStore) => store.statisticsPeriod);
	const dispatch = useDispatch();

	useEffect(() => {
		//Set defaullt 4 weeks ago in first loading
		dispatch(getStatisticsPeriod('4 weeks ago'));
	}, [dispatch]);

	//handle selecting a period depends on nation or country
	const handleClickDropdown = (text: string, days: number) => {
		//Set selected period
		dispatch(getStatisticsPeriod(text));

		if (countryInfo.name) {
			//When a country was selected
			dispatch(getCountry(countries, countryInfo.name, text));
		} else {
			//When nation(Germany) was selected
			dispatch(emptyCountry());
			dispatch(drawChart(nationInfo, text));
		}
	};

	return (
		<>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h3 className="h3">
					{countryInfo.name ? countryInfo.name : 'Germany'}
					<small className="text-muted"> Daily Trend</small>
				</h3>
				<div className="btn-toolbar mb-2 mb-md-0">
					<div className="dropdown">
						<button
							className="btn btn-sm btn-outline-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton2"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{periodType}
						</button>
						<ul
							className="dropdown-menu dropdown-menu"
							aria-labelledby="dropdownMenuButton2"
						>
							<li
								className={
									periodType === '1 week ago'
										? 'dropdown-item active'
										: 'dropdown-item'
								}
								onClick={() => handleClickDropdown('1 week ago', 7)}
							>
								1 week ago
							</li>
							<li
								className={
									periodType === '2 weeks ago'
										? 'dropdown-item active'
										: 'dropdown-item'
								}
								onClick={() => handleClickDropdown('2 weeks ago', 14)}
							>
								2 weeks ago
							</li>
							<li
								className={
									periodType === '3 weeks ago'
										? 'dropdown-item active'
										: 'dropdown-item'
								}
								onClick={() => handleClickDropdown('3 weeks ago', 21)}
							>
								3 weeks ago
							</li>
							<li
								className={
									periodType === '4 weeks ago'
										? 'dropdown-item active'
										: 'dropdown-item'
								}
								onClick={() => handleClickDropdown('4 weeks ago', 28)}
							>
								4 weeks ago
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Statusbar;
