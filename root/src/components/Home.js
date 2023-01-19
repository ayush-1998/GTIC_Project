import React from "react";
import "../styles/Home.css";
import Filter from "./Filter";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-text-container">
          <div className="home-text1">Home &gt;</div>
          <div className="home-text2">Grocery</div>
        </div>
        <div>
          <Filter />
        </div>
      </div>
    </>
  );
};

export default Home;
