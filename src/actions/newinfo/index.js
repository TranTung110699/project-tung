export const TOTAL_NEWINFO = 'TOTAL_NEWINFO';
export const GET_ID = 'GET_ID';

export const getTotalNewinfo = (totalNewinfo) => ({
    type: TOTAL_NEWINFO,
    totalNewinfo,
});
export const getId = (idNewInfo) => ({
    type: GET_ID,
    idNewInfo,
});