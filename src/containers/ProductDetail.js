import React, { useEffect, useState } from "react";
import "../styles/ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from 'react-loader-spinner';
import { productDetail } from "../actions/products_actions";
import Rating from "../components/Rating";
import { addToCart } from "../actions/cart_actions";

const ProductDetail = (props) => {
  const { product, loading } = useSelector((state) => state.productDetail);
  const { isAuthenticated } = useSelector((state) => state.login);
  const [quantity, setQuantity] = useState("1");
  console.log(isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const clickHandler = () => {
    dispatch(addToCart(product._id, quantity));
    props.history.push("/cart");
  };
  return (
    <div className="ProductDetail">
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"}}>
        <Loader
            className="loader"
            color="#e42176"/>
          </div>
      ) : (
        <div className="container container--sb product">
          <div className="product__left">
            <img src={product.imgUrl} alt="" className="product__img" />
          </div>
          <div className="product__middle">
            <div>
              <h2 className="product__heading">PRODUCT DETAILS</h2>
              <div className="container container--sb">
                <strong>NAME</strong>
                <p className="product__detail">{product.name}</p>
              </div>
              <div className="container container--sb">
                <strong>CATEGORY</strong>
                <p className="product__detail">{product.category}</p>
              </div>
              <div className="container container--sb">
                <strong>BRAND</strong>
                <p className="product__detail">{product.brand}</p>
              </div>

              <div className="container container--sb">
                <strong>PRICE</strong>
                <p className="product__detail">
                  <span style={{ textDecoration: "line-through" }}>N</span>
                  {product.price}
                </p>
              </div>
              <div className="container container--sb">
                <strong>AVAILABLE?</strong>
                <p className="product__detail">
                  {product.available ? "Yes" : "No"}
                </p>
              </div>
              <div className="container container--sb">
                <strong>COUNT IN STOCK?</strong>
                <p className="product__detail">{product.inStock}</p>
              </div>
              <div className="container container--sb">
                <strong>RATING</strong>
                <Rating rating={product.rating} />
              </div>
              <div className="container container--sb">
                <strong>UNITS</strong>
                <select
                  style={{ padding: "1em" }}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(Number(product.inStock)).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="container">
                <button
                  className="product__button"
                  onClick={clickHandler}
                  disabled={product.available ? false : true}
                  style={{
                    cursor: product.available ? "pointer" : "not-allowed",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
