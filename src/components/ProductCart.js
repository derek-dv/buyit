import React, { useEffect, useState } from "react";
import { Delete, Remove, RemoveFromQueue } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../actions/cart_actions";

const ProductCart = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    setQuantity(props.quantity);
  }, [props.quantity]);

  const removeHandler = () => {
    alert("OK");
    dispatch(removeCart(props.id));
  };
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
