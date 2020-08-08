import newinfo from './newinfo';
import top from './top';
import assess from './assess';
import comparison from "./comparison";
import buy from "./buy";
import { combineReducers } from 'redux';

export default combineReducers({
    newinfo,
    top,
    assess,
    comparison,
    buy
});
