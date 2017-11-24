import spinnerReducer from './spinnerReducer';
import bugsReducer from './bugsReducer';

import { combineReducers } from 'redux';

let appReducers = combineReducers({
	bugState : bugsReducer,
	spinnerState : spinnerReducer
});

export default appReducers;