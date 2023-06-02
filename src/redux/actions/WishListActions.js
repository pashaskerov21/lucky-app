import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../types/ActionTypes";

export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: product, 
    };
};

export const removeFromWishlist = (productId) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: productId,
    }
}