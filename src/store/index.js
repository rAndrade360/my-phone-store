import { combineReducers, createStore } from "redux";
import cart from "./ducks/cart/cart";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  cart,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
