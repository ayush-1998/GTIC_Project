import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route} from "react-router-dom" 
import Cart from "./pages/Cart";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
      <div className="Header">
        <Footer />
      </div>
    </>
  );
}

export default App;
