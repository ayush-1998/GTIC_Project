import React from "react";
import "../styles/Cart.css";
import { BiTime } from "react-icons/bi";
import Filter from "./Filter";

const Cart = () => {
  return (
    <>
      <div className="mycart-container">
        <div className="cart-text-container">
          <div className="cart-text1">Home &gt;</div>
          <div className="cart-text2">Grocery Offers &gt;</div>
          <div className="cart-text3">My Cart</div>
        </div>
        <div className="cart-filter">
          <Filter />
        </div>

        <div className="cart-heading">My Cart</div>
        <div className="cart-container">
          <div className="cart1-container">
            <div className="cart-vendor-logo">Amazon Logo</div>
            <div className="cart-product-container">
              <div className="cart-product-image">image</div>
              <div className="cart-productDetail-container">
                <div className="cart-product-brand">
                  Brand : <span>Cadbury</span>
                </div>
                <div className="cart-product-detail">
                  Chocolate Health Drink - Bournvita 1 KG
                </div>
              </div>
              <div className="cart-quantity-container">
                <div className="cart-quantity">Quantity</div>
                <div className="quantity-button">
                  <div className="row mt-1">
                    <div className="row col-8">
                      <div className="input-group mb-3 col-12">
                        <button
                          className="input-group-text col-4"
                          name="decrQuantity"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control col-4"
                          value="1"
                        />
                        <button
                          className="input-group-text col-4"
                          name="incQuantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-quantity-text">
                  <span>Delete</span>
                  <span className="cart-saveFor">Save for later</span>
                </div>
              </div>
              <div className="cart-product-price">₹ 385</div>
            </div>
            <hr />
          </div>
          {/* second product start */}
          <div className="cart-product-container">
            <div className="cart-product-image">image</div>
            <div className="cart-productDetail-container">
              <div className="cart-product-brand">
                Brand : <span>Cadbury</span>
              </div>
              <div className="cart-product-detail">
                Chocolate Health Drink - Bournvita 1 KG
              </div>
            </div>
            <div className="cart-quantity-container">
              <div className="cart-quantity">Quantity</div>
              <div className="quantity-button">
                <div className="row mt-1">
                  <div className="row col-8">
                    <div className="input-group mb-3 col-12">
                      <button className="input-group-text col-4" name="decrQuantity">
                        -
                      </button>
                      <input type="text" className="form-control col-4" value="1" />
                      <button className="input-group-text col-4" name="incQuantity">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-quantity-text">
                <span>Delete</span>
                <span className="cart-saveFor">Save for later</span>
              </div>
            </div>
            <div className="cart-product-price">₹ 385</div>
          </div>
          <hr />

          <div className="cart-delivery-container">
            <div className="cart-delivery-icon">
              <BiTime />
            </div>
            <div className="cart-delivery-text">
              Delivery by Tommorrow, between 6:00 PM - 8:00 PM
            </div>
          </div>
          <hr />

          {/* second vendor start */}
          <div className="cart1-container">
            <div className="cart-vendor-logo">Amazon Logo</div>
            <div className="cart-product-container">
              <div className="cart-product-image">image</div>
              <div className="cart-productDetail-container">
                <div className="cart-product-brand">
                  Brand : <span>Cadbury</span>
                </div>
                <div className="cart-product-detail">
                  Chocolate Health Drink - Bournvita 1 KG
                </div>
              </div>
              <div className="cart-quantity-container">
                <div className="cart-quantity">Quantity</div>
                <div className="quantity-button">
                  <div className="row mt-1">
                    <div className="row col-8">
                      <div className="input-group mb-3 col-12">
                        <button
                          className="input-group-text col-4"
                          name="decrQuantity"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control col-4"
                          value="1"
                        />
                        <button
                          className="input-group-text col-4"
                          name="incQuantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-quantity-text">
                  <span>Delete</span>
                  <span className="cart-saveFor">Save for later</span>
                </div>
              </div>
              <div className="cart-product-price">₹ 385</div>
            </div>
            <hr />
          </div>

          <div className="cart-delivery-container">
            <div className="cart-delivery-icon">
              <BiTime />
            </div>
            <div className="cart-delivery-text">
              Delivery by Tommorrow, between 6:00 PM - 8:00 PM
            </div>
          </div>
          <hr />

          <div className="cart-checkoutPrice-container">
            <div className="cart-chekoutPrice-left">
              <div className="cart-subtotal">Subtotal (6 items): ₹ 1051</div>
              <div className="cart-saving"> Saving: ₹ 151</div>
            </div>
            <div className="cart-chekoutPrice-right">
              <button type="button" className="btn btn-success cart-checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
