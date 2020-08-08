import {SEARCH_BRAND_RIGHT, SEARCH_CAR_LEFT} from "../comparison";

export const SELECT_STATUS = 'SELECT_STATUS';
export const SEARCH_BRAND = 'SEARCH_BRAND';
export const SEARCH_CAR = 'SEARCH_CAR';

export const selectStatus = (status) => ({ type: SELECT_STATUS, status });

export const searchBrand = (brand) => ({
    type: SEARCH_BRAND,
    brand,
});
export const searchCar = (car) => ({
    type: SEARCH_CAR,
    car,
});