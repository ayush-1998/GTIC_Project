import React from "react";
import ProductList from "../pages/ProductList";
import "../styles/Home.css";
import Filter from "./Filter";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-text-container">
          <div className="home-text1">Home &gt;</div>
          <div className="home-text2">Grocery Offers</div>
        </div>
        <h1 className="product-header">Grocery Offers</h1>
        <div>
          <Filter />
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Home;
