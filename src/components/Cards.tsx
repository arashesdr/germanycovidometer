import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

import { RootStore } from '../redux/store/store';

const Cards: React.FC = () => {
	const nationInfo = useSelector((store: RootStore) => store.nation);
	const countryInfo = useSelector((store: RootStore) => store.country);
	const period = useSelector((store: RootStore) => store.statisticsPeriod);

	return (
		<div>
			<div className="row row-cols-1 row-cols-md-3 g-4 ms-5 me-3">
				<div className="col">
					<div className="card text-dark bg-light h-90 rounded-top shadow-sm">
						<div className="card-body">
							<div className="card-icon">
								<h6 className="text-muted">
									{' '}
									<i
										className="fa fa-cog fa-spin fa-1x fa-fw card-icon-color-cases"
										aria-hidden="true"
									></i>
									CASES
								</h6>
							</div>
							<hr />
							<h5 className="card-title px-4">
								<NumberFormat
									value={
										countryInfo.name
											? period === '1 week ago'
												? countryInfo.cases1w
												: period === '2 weeks ago'
												? countryInfo.cases2w
												: period === '3 weeks ago'
												? countryInfo.cases3w
												: period === '4 weeks ago'
												? countryInfo.cases4w
												: 0
											: period === '1 week ago'
											? nationInfo.cases1w
											: period === '2 weeks ago'
											? nationInfo.cases2w
											: period === '3 weeks ago'
											? nationInfo.cases3w
											: period === '4 weeks ago'
											? nationInfo.cases4w
											: 0
									}
									displayType={'text'}
									thousandSeparator={true}
								/>
							</h5>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card text-dark bg-light h-100  shadow-sm">
						<div className="card-body">
							<div className="card-icon">
								<h6 className="text-muted">
									{' '}
									<i
										className="fa fa-cog fa-spin fa-1x fa-fw card-icon-color-deaths"
										aria-hidden="true"
									></i>
									DEATHS
								</h6>
							</div>
							<hr />
							<h5 className="card-title px-4">
								<NumberFormat
									value={
										countryInfo.name
											? period === '1 week ago'
												? countryInfo.deaths1w
												: period === '2 weeks ago'
												? countryInfo.deaths2w
												: period === '3 weeks ago'
												? countryInfo.deaths3w
												: period === '4 weeks ago'
												? countryInfo.deaths4w
												: 0
											: period === '1 week ago'
											? nationInfo.deaths1w
											: period === '2 weeks ago'
											? nationInfo.deaths2w
											: period === '3 weeks ago'
											? nationInfo.deaths3w
											: period === '4 weeks ago'
											? nationInfo.deaths4w
											: 0
									}
									displayType={'text'}
									thousandSeparator={true}
								/>
							</h5>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card text-dark bg-light h-100  shadow-sm">
						<div className="card-body">
							<div className="card-icon">
								<h6 className="text-muted">
									{' '}
									<i
										className="fa fa-cog fa-spin fa-1x fa-fw card-icon-color-recovered"
										aria-hidden="true"
									></i>
									RECOVERED
								</h6>
							</div>
							<hr />
							<h5 className="card-title px-4">
								<NumberFormat
									value={
										countryInfo.name
											? period === '1 week ago'
												? countryInfo.recovered1w
												: period === '2 weeks ago'
												? countryInfo.recovered2w
												: period === '3 weeks ago'
												? countryInfo.recovered3w
												: period === '4 weeks ago'
												? countryInfo.recovered4w
												: 0
											: period === '1 week ago'
											? nationInfo.recovered1w
											: period === '2 weeks ago'
											? nationInfo.recovered2w
											: period === '3 weeks ago'
											? nationInfo.recovered3w
											: period === '4 weeks ago'
											? nationInfo.recovered4w
											: 0
									}
									displayType={'text'}
									thousandSeparator={true}
								/>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
