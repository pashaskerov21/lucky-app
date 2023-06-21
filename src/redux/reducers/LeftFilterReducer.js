import { SEND_LEFT_FILTERS_PARAMS } from "../types/ActionTypes"

const initialState = {
    leftFilterParams: [],
}

const LeftFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_LEFT_FILTERS_PARAMS:
            return {
                ...state,
                leftFilterParams: [action.payload]
            };
        default:
            return state;
    }
}

export default LeftFilterReducer