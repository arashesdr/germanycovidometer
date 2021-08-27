import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { drawChart } from '../redux/actions/chart.action';
import { getCountries } from '../redux/actions/countries.action';
import { emptyCountry, getCountry } from '../redux/actions/country.action';
import { RootStore } from '../redux/store/store';

const Sidebar: React.FC = () => {
	const countries = useSelector((store: RootStore) => store.countries);
	const country = useSelector((store: RootStore) => store.country);
	const period = useSelector((store: RootStore) => store.statisticsPeriod);
	const nationInfo = useSelector((store: RootStore) => store.nation);
	const [activeMenu, setActiveMenu] = useState<string>('Germany'); //change color of selected country
	const dispatch = useDispatch();

	useEffect(() => {
		//Fetch countries info
		dispatch(getCountries(28));
	}, [dispatch]);

	//Click on nation(Germany)
	const handleClickNation = () => {
		dispatch(emptyCountry());
		dispatch(drawChart(nationInfo, period));
		setActiveMenu('Germany');
	};

	//Click on a country
	const handleClickCountry = (countryID: string) => {
		dispatch(getCountry(countries, countryID, period));
		dispatch(drawChart(country, period));
		setActiveMenu(countryID);
	};

	return (
		<>
			<nav
				id="sidebarMenu"
				className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse scrollbar-dusty-grass"
			>
				<div className="position-sticky pt-2">
					<ul className="nav flex-column">
						<li
							key="0"
							className={
								activeMenu === 'Germany'
									? 'nav-item nav-link active '
									: 'nav-item nav-link'
							}
							onClick={handleClickNation}
						>
							<span
								className={
									activeMenu === 'Germany'
										? 'fa fa-check feather'
										: 'fa fa-map-marker feather'
								}
							></span>
							Germany
						</li>

						{countries
							? countries.map((key, index) => (
									<li
										key={index}
										className={
											activeMenu === key.name
												? 'nav-item nav-link active'
												: 'nav-item nav-link'
										}
										onClick={() => handleClickCountry(key.name)}
									>
										<span
											className={
												activeMenu === key.name
													? 'fa fa-check feather'
													: 'fa fa-map-marker feather'
											}
										></span>
										{key.name}
									</li>
							  ))
							: null}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;
