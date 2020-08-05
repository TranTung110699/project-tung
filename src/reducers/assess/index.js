import {
    SELECT_MONTH,
    SELECT_BRAND
} from '../../actions/assess';
import moment from 'moment';

const initialState = {
    currentMonth: 'april',
    currentBrand: 'VinFast',
};

export default function assessReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_MONTH:
            return Object.assign({}, state, {
                currentMonth: action.months,
            });
        case SELECT_BRAND:
            return Object.assign({}, state, {
                currentBrand: action.brands,
            });
        default:
            return state;
    }
}