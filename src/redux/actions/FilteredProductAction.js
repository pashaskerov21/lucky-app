import { SEND_FILTERED_PRODUCTS } from "../types/ActionTypes"

export const sendFilteredProducts = (filteredProducts) => {
    return{
        type: SEND_FILTERED_PRODUCTS,
        payload: filteredProducts,
    }
}