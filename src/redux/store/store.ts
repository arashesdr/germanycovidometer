import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from '../reducers/index';

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

export type RootStore = ReturnType<typeof reducers>;

export default store;
