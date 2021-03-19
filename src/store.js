import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addToCart } from "./reducers/cart";
import { productDetail, products } from "./reducers/products";
import { login, register } from "./reducers/auth";
import { alert } from "./reducers/alert";
import { profile } from "./reducers/profile";

const initialState = {};

const reducer = combineReducers({
  products: products,
  productDetail: productDetail,
  cart: addToCart,
  login,
  register,
  alerts: alert,
  profile,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
