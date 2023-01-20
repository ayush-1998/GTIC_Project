import React from "react";
import "../styles/Cart.css";
import { BiTime } from "react-icons/bi";

const Cart = () => {
  return (
    <>
      <div className="cart-heading">My Cart</div>
      <div className="cart-container">
        <div className="cart1-container">
          <div className="vendor-logo">Amazon Logo</div>
          <div className="product-container">
            <div className="product-image">image</div>
            <div className="productDetail-container">
              <div className="product-brand">
                Brand : <span>Cadbury</span>
              </div>
              <div className="product-detail">
                Chocolate Health Drink - Bournvita 1 KG
              </div>
            </div>
            <div className="quantity-container">
              <div className="quantity">Quantity</div>
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
              <div className="quantity-text">
                <span>Delete</span>
                <span className="saveFor">Save for later</span>
              </div>
            </div>
            <div className="product-price">₹ 385</div>
          </div>
          <hr />
          <div className="product-container">
            <div className="product-image">image</div>
            <div className="productDetail-container">
              <div className="product-brand">
                Brand : <span>Cadbury</span>
              </div>
              <div className="product-detail">
                Chocolate Health Drink - Bournvita 1 KG
              </div>
            </div>
            <div className="quantity-container">
              <div className="quantity">Quantity</div>
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
              <div className="quantity-text">
                <span>Delete</span>
                <span className="saveFor">Save for later</span>
              </div>
            </div>
            <div className="product-price">₹ 385</div>
          </div>
          <hr />
        </div>
        <div className="delivery-container">
          <div className="delivery-icon">
            <BiTime />
          </div>
          <div className="delivery-text">
            Delivery by Tommorrow, between 6:00 PM - 8:00 PM
          </div>
        </div>

        <div className="cart1-container">
          <div className="vendor-logo">Bigbasket Logo</div>
          <div className="product-container">
            <div className="product-image">image</div>
            <div className="productDetail-container">
              <div className="product-brand">
                Brand : <span>Cadbury</span>
              </div>
              <div className="product-detail">
                Chocolate Health Drink - Bournvita 1 KG
              </div>
            </div>
            <div className="quantity-container">
              <div className="quantity">Quantity</div>
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
              <div className="quantity-text">
                <span>Delete</span>
                <span className="saveFor">Save for later</span>
              </div>
            </div>
            <div className="product-price">₹ 385</div>
          </div>
          <hr />
        </div>
        <div className="delivery-container">
          <div className="delivery-icon">
            <BiTime />
          </div>
          <div className="delivery-text">
            Delivery by Tommorrow, between 6:00 PM - 8:00 PM
          </div>
        </div>

        <div className="checkoutPrice-container">
          <div className="chekoutPrice-left">
            <div className="subtotal">Subtotal (6 items): ₹ 1051</div>
            <div className="saving"> Saving: ₹ 151</div>
          </div>
          <div className="chekoutPrice-right">
            <button type="button" className="btn btn-success checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
