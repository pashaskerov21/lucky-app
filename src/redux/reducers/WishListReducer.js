import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../types/ActionTypes";

const initialState = [];

const WishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload];
        case REMOVE_FROM_WISHLIST:
            return state.filter((product) => product.id !== action.payload);
        default:
            return state;
    }
}

export default WishlistReducer;