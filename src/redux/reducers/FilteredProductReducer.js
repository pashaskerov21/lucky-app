import { SEND_FILTERED_PRODUCTS } from "../types/ActionTypes"

const initialState = []

const FilteredProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_FILTERED_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}


export default FilteredProductReducer