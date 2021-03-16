import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCart = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  useEffect(() => {
    setQuantity(props.quantity);
  }, [props.quantity]);
  return (
    <div className="summary__item">
      <img src={props.img} alt={props.title} className="summary__img" />
      <Link to={`/products/${props.id}`}>
        <strong className="summary__title">{props.title}</strong>
      </Link>
      <p className="summary__price">{props.price}</p>
      <select
        className="summary__select"
        style={{ padding: "1em" }}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {[...Array(Number(props.inStock)).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button className="summary__button">Remove</button>
    </div>
  );
};

export default ProductCart;
