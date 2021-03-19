import { Search } from "@material-ui/icons";
import React from "react";
import "../styles/SearchHome.css";

const SearchHome = () => {
  return (
    <div className="searchHome">
      <form className="searchHome__form">
        <input className="searchHome__input" placeholder="Search" />
        <button className="searchHome__button">
          <Search /> Search
        </button>
      </form>
    </div>
  );
};

export default SearchHome;
