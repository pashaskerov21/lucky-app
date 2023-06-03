import { combineReducers } from "redux";
import WishlistReducer from "./reducers/WishListReducer";
import BasketReducer from './reducers/BasketReducer'
import BasketTotalReducer from "./reducers/BasketTotalReducer";
import FilteredProductReducer from "./reducers/FilteredProductReducer";




const rootReducer = combineReducers({
    wishlistProducts: WishlistReducer,
    basketProducts: BasketReducer,
    basketTotal: BasketTotalReducer,
    filteredProducts: FilteredProductReducer,
})

export default rootReducer