import counterReducer from './counter';
import loggedReducer from './isLogged'
import bugReducer  from './bugs';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    counter:counterReducer,
    logged:loggedReducer,
    bug:bugReducer
})
export default allReducers;