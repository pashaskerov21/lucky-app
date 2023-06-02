import { UPDATE_TOTAL } from "../types/ActionTypes"

const initialState = {
    total: 0,
}

const BasketTotalReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TOTAL:
            return {
                ...state,
                total: action.payload
            };
        default:
            return state;
    }
}

export default BasketTotalReducer