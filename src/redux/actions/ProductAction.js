import { ADD_TO_BASKET, ADD_TO_WISHLIST, DECREASE_PRODUCT_AMOUNT, INCREASE_PRODUCT_AMOUNT, REMOVE_FROM_BASKET, REMOVE_FROM_WISHLIST } from "../types/ActionTypes"


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

export const addToBasket = (product) => {
    return {
        type: ADD_TO_BASKET,
        payload: product,
    }
}

export const removeFromBasket = (productId) => {
    return { 
        type: REMOVE_FROM_BASKET,
        payload: productId,
    }
}

export const decreaseProductAmount = (productId) => {
    return {
        type: DECREASE_PRODUCT_AMOUNT,
        payload: productId,
    }
}

export const increaseProductAmount = (productId) => {
    return { 
        type: INCREASE_PRODUCT_AMOUNT,
        payload: productId,
    }
}

