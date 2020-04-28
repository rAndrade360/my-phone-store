import { combineReducers, createStore } from "redux";
import cart from "./ducks/cart/cart";
const rootRedux = combineReducers({
  cart,
});

export default createStore(rootRedux);
