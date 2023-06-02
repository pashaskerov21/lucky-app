import { ADD_TO_BASKET, DECREASE_PRODUCT_AMOUNT, INCREASE_PRODUCT_AMOUNT, REMOVE_FROM_BASKET } from "../types/ActionTypes"

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

