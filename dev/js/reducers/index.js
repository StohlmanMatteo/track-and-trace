import {combineReducers} from 'redux';
import loadsReducer from "./loadsReducer";
import usersReducer from "./usersReducer";
import configReducer from "./configReducer";
import activeLoadReducer from "./activeLoadReducer";
import activeUserReducer from "./activeUserReducer";
import settingsReducer from "./settingsReducer";
import loginStateReducer from './loginStateReducer';
import trailerReport from './trailerReport';
import locations from './locations';


const allReducers = combineReducers({
	loads:loadsReducer,
	users: usersReducer,
	config: configReducer,
	activeUser: activeUserReducer,
	activeLoad:activeLoadReducer,
	settings:settingsReducer,
	loginState:loginStateReducer,
	trailerReport:trailerReport,
	locations:locations

});

export default allReducers;