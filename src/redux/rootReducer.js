import { combineReducers } from "redux";
import BasketTotalReducer from "./reducers/BasketTotalReducer";
import ProductReducer from "./reducers/ProductReducer";
import LeftFilterReducer from "./reducers/LeftFilterReducer";




const rootReducer = combineReducers({
    productState: ProductReducer,
    basketTotal: BasketTotalReducer,
    leftFilterParams: LeftFilterReducer,
})

export default rootReducer