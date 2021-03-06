import { CART_ADD, CART_REMOVE } from "../actions/cart";

export const addToCart = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD:
      const item = { ...action.payload.data, quantity: action.payload.qty };
      const itemExists = state.cartItems.find((x) => x._id === item._id);
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === itemExists._id ? item : x
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, item] };
    case CART_REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };
    default:
      return state;
  }
};
