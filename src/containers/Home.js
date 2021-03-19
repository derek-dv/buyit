import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import ProductHome from "../components/ProductHome";
import "../styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/products_actions";
import SearchHome from "../components/SearchHome";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  const { products, loading } = useSelector((state) => state.products);

  return (
    <div className="main">
      <div className="main__side">
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
          <Loader className="loader" color="#e42176" />
        ) : (
          <Fragment>
            <div className="main__right__top">
              <SearchHome />
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
