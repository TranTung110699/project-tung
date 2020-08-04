import {
    SELECT_MONTH,
} from '../../actions/assess';
import moment from 'moment';

const initialState = {
    currentMonth: 'april',
};

export default function statisticReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_MONTH:
            return Object.assign({}, state, {
                currentMonth: action.months,
            });
        default:
            return state;
    }
}