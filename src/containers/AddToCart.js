import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/products_actions";
import ProductCart from "../components/ProductCart";
import "../styles/AddToCart.css";

const AddToCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct);
  }, [dispatch]);

  console.log(cartItems);
  return (
    <div className="AddToCart">
      <div className="addCart container container--sb">
        <div className="summary">
          <h2 className="summary__heading">Transaction Summary</h2>
          <div className="summary__category">
            <h3>SHIRTS</h3>
            {cartItems.map((product) => (
              <ProductCart
                key={product._id}
                price={product.price}
                img={product.imgUrl}
                title={product.name}
                quantity={product.quantity}
                inStock={product.inStock}
                id={product._id}
              />
            ))}

            <div className="summary_total">
              <strong>TOTAL</strong>
              <p>$112</p>
            </div>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout__details">
            <h2 className="summary__heading">Proceed to checkout</h2>
            <div className="checkout__item">
              <div className="checkout__category">
                <strong>TOTAL ITEMS</strong>
                <p>15</p>
              </div>
              <div className="checkout__category">
                <strong>TOTAL PRICE</strong>
                <p>$220.00</p>
              </div>
              <div className="container">
                <button className="checkout__button">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
