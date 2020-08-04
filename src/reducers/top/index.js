import {
    SELECT_KIND,
} from '../../actions/top';
import moment from 'moment';

const initialState = {
    currentKind: 'topexpen',
};

export default function statisticReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_KIND:
            return Object.assign({}, state, {
                currentKind: action.kinds,
            });
        default:
            return state;
    }
}