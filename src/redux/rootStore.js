import {combineReducers, createStore} from 'redux';
import dummyReducer from './reducers';

const rootReducers = combineReducers({dummyReducer});

const store = createStore(rootReducers);

export default store;
