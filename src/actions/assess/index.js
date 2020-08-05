export const SELECT_MONTH = 'SELECT_MONTH';
export const SELECT_BRAND = 'SELECT_BRAND';
export const selectMonth = (months) => ({ type: SELECT_MONTH, months });
export const selectBrand = (brands) => ({ type: SELECT_BRAND, brands });