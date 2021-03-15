import Axios from "axios";
import { CART_ADD } from "./cart";
export const addToCart = (id, qty) => (dispatch) => {
  Axios.get(`http://localhost:5000/api/products/${id}`)
    .then((res) => {
      dispatch({ type: CART_ADD, payload: res.data });
    })
    .catch((err) => {
      alert(err);
    });
};
