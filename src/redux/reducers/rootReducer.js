import { combineReducers } from "redux";
import WishlistReducer from "./WishListReducer";
import BasketReducer from './BasketReducer'
import BasketTotalReducer from "./BasketTotalReducer";




const rootReducer = combineReducers({
    wishlistProducts: WishlistReducer,
    basketProducts: BasketReducer,
    basketTotal: BasketTotalReducer,
})

export default rootReducer