import React from "react";
import ProductCart from "../components/ProductCart";

const CartCategory = ({ cartItems }) => {
  return (
    <div className="summary__category">
      <h3>{cartItems.category}</h3>
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
        <p>
          <span style={{ textDecoration: "line-through" }}>N</span>
          {cartItems.reduce(
            (a, c) => a + Number(c.quantity) * Number(c.price),
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default CartCategory;
