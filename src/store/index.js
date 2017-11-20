import SearchReducer from '../reducers/SearchReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const reducers = {
    SearchReducer
};
const combReducer = combineReducers(reducers);
const rootReducer = createStore(combReducer, applyMiddleware(thunk, ReduxPromise));

export default rootReducer;
