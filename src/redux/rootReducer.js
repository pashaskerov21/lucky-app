import { combineReducers } from "redux";
import BasketTotalReducer from "./reducers/BasketTotalReducer";
import FilteredProductReducer from "./reducers/FilteredProductReducer";
import ProductReducer from "./reducers/ProductReducer";




const rootReducer = combineReducers({
    productState: ProductReducer,
    basketTotal: BasketTotalReducer,
    filteredProducts: FilteredProductReducer,
})

export default rootReducer