import Axios from "axios";
import * as all from "./products";

export const listProduct = () => (dispatch) => {
  dispatch({ type: all.PRODUCT_REQUEST });
  Axios.get("http://localhost:5000/api/products")
    .then((res) => {
      dispatch({ type: all.PRODUCT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: all.PRODUCT_REQUEST_FAIL, payload: err.message });
    });
};

export const productDetail = (id) => (dispatch) => {
  dispatch({ type: all.PRODUCT_DETAIL_REQUEST });
  Axios.get(`http://localhost:5000/api/products/${id}`)
    .then((res) => {
      dispatch({ type: all.PRODUCT_DETAIL_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: all.PRODUCT_DETAIL_REQUEST_FAIL, payload: err });
    });
};
