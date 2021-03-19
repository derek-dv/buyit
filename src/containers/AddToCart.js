import React from "react";
import { useSelector } from "react-redux";
import CartCategory from "../components/CartCategory";
import "../styles/AddToCart.css";

const AddToCart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);
  return (
    <div className="AddToCart">
      <div className="addCart container container--sb">
        <div className="summary">
          <h2 className="summary__heading">Transaction Summary</h2>
          <CartCategory cartItems={ cartItems} />{" "}
        </div>
        <div className="checkout">
          <div className="checkout__details">
            <h2 className="summary__heading">Proceed to checkout</h2>
            <div className="checkout__item">
              <div className="checkout__category">
                <strong>TOTAL ITEMS</strong>
                <p>{cartItems.reduce((a, c) => a + Number(c.quantity), 0)}</p>
              </div>
              <div className="checkout__category">
                <strong>TOTAL PRICE</strong>
                <p>
                  <span style={{ textDecoration: "line-through" }}>N</span>
                  {cartItems.reduce(
                    (a, c) => a + Number(c.quantity) * Number(c.price),
                    0
                  )}
                </p>
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
