/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import {  CiLocationOn } from "react-icons/ci";
import { BsCart2, BsTrophy } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state);
  return (
    <>
      <div className="header-container">
        <div className="header-logo-container">
          <span className="header-logo">Retail Grocery</span>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-success dropdown-toggle dropdown-btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shop By Recipe
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Maharashtrian Style Baingan Ka Bharta
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Amritsari Pindi Chole
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Veg Dum Briyani
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Almond Pesto and Paneer Tikka
              </a>
            </li>
          </ul>
        </div>
        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              placeholder="Search Products"
              id="form1"
              className="form-control"
            />
          </div>
          <button type="button" className="btn btn-success search-btn">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="phone-container">
          <div className="phone-icon">
            <FiPhoneCall />
          </div>
          <div className="phone-number">1840 124 9999</div>
        </div>

        <div className="location-container">
          <div className="location-icon">
            <CiLocationOn />
          </div>
          <div className="location">
            411045, Pune <RiArrowDropDownLine />
          </div>
        </div>
        <div className="login-btn-container">
          <div>
            <img
              className="login-icon"
              src="images/image 122profile.png"
              alt="profile"
            />
          </div>
          <div className="login-content">Hello, Gaurav</div>
        </div>
        <Link style={{color:"black"}} to="/cart">
          <div className="cart-btn-container">
            <div className="cart-icon">
              <BsCart2 />
            </div>
            <div className="cart-content">My Cart {cart.length}</div>
          </div>
        </Link>
        <div className="saving-container">
          <div className="saving-icon">
            <HiOutlineCurrencyRupee />
          </div>
          <div className="saving-content">
            Total Savings
            <div>₹1359</div>
          </div>
        </div>
        <div className="loyalty-container">
          <div className="loyalty-icon">
            <BsTrophy />
          </div>
          <div className="loyalty-content">
            Loyalty Points
            <div>270</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
