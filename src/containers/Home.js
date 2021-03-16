import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductHome from "../components/ProductHome";
import "../styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/products_actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  const { products, loading } = useSelector((state) => state.products);

  return (
    <div className="main">
      <div className="main__side">
        <div className="main__side__search">
          <input
            type="text"
            className="main__side__input"
            placeholder="search"
          />
        </div>
        <div className="main__side__filter">
          <button className="main__side__button">Shorts</button>
          <button className="main__side__button">Shirts</button>
          <button className="main__side__button">Trousers</button>
          <button className="main__side__button">Glasses</button>
          <button className="main__side__button">Phones</button>
          <button className="main__side__button">Computers</button>
          <button className="main__side__button">Accessories</button>
        </div>
      </div>
      <div className="main__right">
        {loading ? (
          <p>Loading</p>
        ) : (
          <Fragment>
            <div className="main__right__top">
              <Link to="/" className="main__right__top_detail">
                Detailed shirts filter {">"}
              </Link>
            </div>
            <div className="container">
              {products.map((product) => (
                <ProductHome
                  key={product._id}
                  src={product.imgUrl}
                  title={product.name}
                  price={product.price}
                  url={`products/${product._id}`}
                  rating={product.rating}
                />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Home;
