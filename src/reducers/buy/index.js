import {
    SELECT_STATUS,
    SEARCH_BRAND,
    SEARCH_CAR
} from "../../actions/buy";

const initialState = {

};

export default function buyReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_STATUS:
            return Object.assign({}, state, {
                status: action.status,
            });
        case SEARCH_BRAND:
            return Object.assign({}, state, {
                brand: action.brand,
            });
        case SEARCH_CAR:
            return Object.assign({}, state, {
                car: action.car,
            });

        default:
            return state;
    }
}