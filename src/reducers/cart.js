import { CART_ADD } from "../actions/cart";

export const addToCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case CART_ADD:
      const item = action.payload;
      return {
        cart: state.cart.map((x) => item),
      };
    default:
      return state;
  }
};
