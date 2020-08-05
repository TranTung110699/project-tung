export const SEARCH_BRAND_LEFT = 'SEARCH_BRAND_LEFT';
export const SEARCH_BRAND_RIGHT = 'SEARCH_BRAND_RIGHT';
export const SEARCH_CAR_LEFT = 'SEARCH_CAR_LEFT';
export const SEARCH_CAR_RIGHT = 'SEARCH_CAR_RIGHT';

export const searchBrandLeft = (brand_left) => ({
    type: SEARCH_BRAND_LEFT,
    brand_left,
});
export const searchBrandRight = (brand_right) => ({
    type: SEARCH_BRAND_RIGHT,
    brand_right,
});
export const searchCarLeft = (car_left) => ({
    type: SEARCH_CAR_LEFT,
    car_left,
});
export const searchCarRight = (car_right) => ({
    type: SEARCH_CAR_RIGHT,
    car_right,
});
