// store.js
import { createStore, combineReducers } from 'redux';
import flightReducer from './reducer';

const rootReducer = combineReducers({
  flight: flightReducer,
});

const store = createStore(rootReducer);

export default store;

