import { SEND_LEFT_FILTERS_PARAMS } from "../types/ActionTypes"

export const sendFilterParams = (filterParams) => {
    return {
        type: SEND_LEFT_FILTERS_PARAMS,
        payload: filterParams,
    }
}