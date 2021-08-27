import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

import { RootStore } from '../redux/store/store';
import { drawChart } from '../redux/actions/chart.action';

const Chart: React.FC = () => {
	const chartData = useSelector((store: RootStore) => store.chart);
	const nationInfo = useSelector((store: RootStore) => store.nation);
	const dispatch = useDispatch();

	useEffect(() => {
		//Get 4 weeks ago nation chart object
		dispatch(drawChart(nationInfo, '4 weeks ago'));
	}, [nationInfo, dispatch]);

	return (
		<>
			<div style={{ width: '100%', height: 370 }}>
				<ResponsiveContainer>
					<LineChart
						data={chartData}
						margin={{
							top: 40,
							right: 30,
							left: 0,
							bottom: 60,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis dataKey="name" interval={0} angle={-75} textAnchor="end" />
						<YAxis />
						<Legend
							wrapperStyle={{ bottom: 0 }}
							verticalAlign="bottom"
							iconType="line"
						/>
						<Tooltip />
						<Line
							name="Cases"
							type="monotone"
							dataKey="uv"
							stroke="#ed8f04"
							fill="#ed8f04"
						/>
						<Line
							name="Deaths"
							type="monotone"
							dataKey="pv"
							stroke="#f70a44"
							fill="#f70a44"
						/>
						<Line
							name="Recovered"
							type="monotone"
							dataKey="amt"
							stroke="#4bbe25"
							fill="#4bbe25"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</>
	);
};

export default Chart;
