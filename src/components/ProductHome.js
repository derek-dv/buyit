import React from "react";
import "../styles/ProductHome.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductHome = ({ src, title, price, url, rating }) => {
  return (
    <div className="ProductHome">
      <Link to={`/${url}`} className="ProductHome__link">
        <img src={src} className="ProductHome__img" alt={title} />
        <p>{title}</p>
        <span className="ProductHome__details">
          <p>
            <span style={{ textDecoration: "line-through" }}>N</span>
            {price}
          </p>
          <p>
            <Rating rating={rating} />
          </p>
        </span>
      </Link>
    </div>
  );
};

export default ProductHome;
