import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { ToastContainer, Flip } from 'react-toastify';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer
				position="bottom-left"
				autoClose={3000}
				hideProgressBar={true}
				transition={Flip}
			/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
