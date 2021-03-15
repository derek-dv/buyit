import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addToCart } from "./reducers/cart";
import { productDetail, products } from "./reducers/products";

const initialState = {};

const reducer = combineReducers({
  products: products,
  productDetail: productDetail,
  cart: addToCart,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
