import {
    TOTAL_NEWINFO,
    GET_ID,
} from '../../actions/newinfo';

const initialState = {
    totalNewinfo: 0,
    idNewInfo:'',
};

export default function searchContestReducer(state = initialState, action) {
    switch (action.type) {
        case TOTAL_NEWINFO:
            return Object.assign({}, state, {
                totalNewinfo: action.totalNewinfo,
            });
        case GET_ID:
            return Object.assign({}, state, {
                idNewInfo: action.idNewInfo,
            });
        default:
            return state;
    }
}
