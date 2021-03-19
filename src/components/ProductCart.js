import React, { useEffect, useState } from "react";
import { Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeCart } from "../actions/cart_actions";

const ProductCart = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart(props.id, quantity));
  }, [quantity, dispatch, props.id]);

  const removeHandler = () => {
    dispatch(removeCart(props.id));
  };
  return (
    <div className="summary__item">
      <div className="summary__img__container">
        <img src={props.img} alt={props.title} className="summary__img" />
        <Link className="summary__title" to={`/products/${props.id}`} style={{display: "flex", flexDirection: "column"}}>
          <strong>{props.title}</strong>
        </Link>
      </div>
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
      <button
        className="summary__button"
        style={{ alignItems: "center" }}
        onClick={removeHandler}
      >
        <Delete />
        Remove
      </button>
    </div>
  );
};

export default ProductCart;
