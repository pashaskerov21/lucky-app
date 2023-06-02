import { ADD_TO_BASKET, DECREASE_PRODUCT_AMOUNT, INCREASE_PRODUCT_AMOUNT, REMOVE_FROM_BASKET } from "../types/ActionTypes";

const initialState = [];

const BasketReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_BASKET: 
            return [...state, action.payload];
        case REMOVE_FROM_BASKET:
            return state.filter((product) => product.id !== action.payload);
        case DECREASE_PRODUCT_AMOUNT: 
            return state.map((product) => product.id === action.payload && product.amount > 1 ? {...product, amount: (product.amount ? product.amount : 1) - 1} : product);
        case INCREASE_PRODUCT_AMOUNT:
            return state.map((product) => product.id === action.payload ? {...product, amount: (product.amount ? product.amount : 1) + 1} : product);
        default: 
            return state;
    }
}

export default BasketReducer