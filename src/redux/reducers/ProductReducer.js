import { ADD_TO_BASKET, ADD_TO_WISHLIST, DECREASE_PRODUCT_AMOUNT, INCREASE_PRODUCT_AMOUNT, REMOVE_FROM_BASKET, REMOVE_FROM_WISHLIST } from "../types/ActionTypes"

const initialState = {
    wishlistProducts: [],
    basketProducts: [],
    product: {},
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlistProducts: [...state.wishlistProducts, action.payload]
            }
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlistProducts: state.wishlistProducts.filter(
                    (product) => product.id !== action.payload
                )
            };
        case ADD_TO_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts, action.payload]
            };
        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basketProducts: state.basketProducts.filter(
                    (product) => product.id !== action.payload
                )
            };
        case INCREASE_PRODUCT_AMOUNT:
            return {
                ...state,
                basketProducts: state.basketProducts.map((product) => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            amount: product.amount + 1
                        };
                    }
                    return product;
                })
            };

        case DECREASE_PRODUCT_AMOUNT:
            return {
                ...state,
                basketProducts: state.basketProducts.map((product) => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            amount: product.amount > 1 ? product.amount - 1 : 1
                        };
                    }
                    return product;
                })
            };
        default:
            return state;

    }
}

export default ProductReducer


