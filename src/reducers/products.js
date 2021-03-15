import * as all from "../actions/products";

export const products = (state = { loading: true, products: [] }, action) => {
  switch (action.type) {
    case all.PRODUCT_REQUEST:
      return { loading: true };
    case all.PRODUCT_REQUEST_SUCCESS:
      return { loading: false, products: action.payload };
    case all.PRODUCT_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetail = (
  state = { loading: true, product: {} },
  action
) => {
  switch (action.type) {
    case all.PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case all.PRODUCT_DETAIL_REQUEST_SUCCESS:
      return { loading: false, product: action.payload };
    case all.PRODUCT_DETAIL_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
