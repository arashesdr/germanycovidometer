import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Cards from './components/Cards';
import Chart from './components/Chart';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Statusbar from './components/Statusbar';
import { getNationByDays } from './redux/actions/nation.action';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		//Fetch 4 weeks ago nation info
		dispatch(getNationByDays(28));
	}, [dispatch]);

	return (
		<div>
			<Header />
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						<Statusbar />
						<Cards />
						<Chart />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
