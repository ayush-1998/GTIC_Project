/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CiUser, CiLocationOn } from "react-icons/ci";
import { BsCart2, BsTrophy } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-logo-container">
          <span className="header-logo">Retail Grocery</span>
        </div>
        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              placeholder="search"
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
            400021, Mumbai <RiArrowDropDownLine />
          </div>
        </div>
        <div className="login-btn-container">
          <div className="login-icon">
            <CiUser />
          </div>
          <div className="login-content">Hello, Rohit</div>
        </div>
        <div className="cart-btn-container">
          <div className="cart-icon">
            <BsCart2 />
          </div>
          <div className="cart-content">My Cart</div>
        </div>

        <div className="subheader">
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
          <div className="offer-container">
            <div className="offer-icon">
              <MdOutlineLocalOffer />
            </div>
            <div className="offer-content">Offers</div>
          </div>
          <div className="saving-container">
            <div className="saving-icon">
              <HiOutlineCurrencyRupee />
            </div>
            <div className="saving-content">Total Savings : ₹1359</div>
          </div>
          <div className="loyalty-container">
            <div className="loyalty-icon">
              <BsTrophy />
            </div>
            <div className="loyalty-content">Loyalty Points: 207</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
