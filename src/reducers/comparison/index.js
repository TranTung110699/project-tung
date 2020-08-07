import {
    SEARCH_BRAND_LEFT,
    SEARCH_BRAND_RIGHT,
    SEARCH_CAR_LEFT,
    SEARCH_CAR_RIGHT
} from "../../actions/comparison";

const initialState = {
    brand_left:'VinFast',
    brand_right:'VinFast',
};

export default function comparisonReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BRAND_LEFT:
            return Object.assign({}, state, {
                brand_left: action.brand_left,
            });
        case SEARCH_BRAND_RIGHT:
            return Object.assign({}, state, {
                brand_right: action.brand_right,
            });
        case SEARCH_CAR_LEFT:
            return Object.assign({}, state, {
                car_left: action.car_left,
            });
        case SEARCH_CAR_RIGHT:
            return Object.assign({}, state, {
                car_right: action.car_right,
            });

        default:
            return state;
    }
}