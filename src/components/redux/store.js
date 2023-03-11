import { createStore } from "redux";
import { cartReducer } from "./reducer/cart-reducer";

const store = createStore(
    cartReducer);
   

export default store;