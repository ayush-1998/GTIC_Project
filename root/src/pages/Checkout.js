/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import "../styles/Checkout.css";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state);
  //const dispatch = useDispatch();

  const [amazon, setAmazon] = useState(new Set());
  const [bigBasket, setBigBasket] = useState(new Set());
  const [blinkit, setBlinkIt] = useState(new Set());

  useEffect(() => {
    setCart();
    window.scrollTo(0, 0);
  }, [cart]);

  function setCart() {
    setAmazon(new Set());
    setBigBasket(new Set());
    setBlinkIt(new Set());
    cart.forEach((product) => {
      if (product.Vendor.hasMin("offerPrice").name === "Amazon") {
        setAmazon((amazon) => new Set(amazon).add(product));
        //setTotal((total) => total+=product.Vendor[0].offerPrice*product.quantity);
      }
      if (product.Vendor.hasMin("offerPrice").name === "bigbasket") {
        setBigBasket((bigBasket) => new Set(bigBasket).add(product));
        //setTotal((total) => total+=product.Vendor[1].offerPrice*product.quantity);
      }
      if (product.Vendor.hasMin("offerPrice").name === "blinkit") {
        setBlinkIt((blinkit) => new Set(blinkit).add(product));
        //setTotal((total) => total+=product.Vendor[2].offerPrice*product.quantity);
      }
    });
  }
  const minPrice = (product) => {
    return product.Vendor.reduce(
      (min, b) => Math.min(min, b.offerPrice),
      product.Vendor[0].offerPrice,
    );
  };
  const total = () => {
    var subtotal = 0;
    var savings = 0;
    cart.map((product) => {
      subtotal += minPrice(product) * product.quantity;
      savings +=
        (product.Vendor.hasMin("offerPrice").actualPrice - minPrice(product)) *
        product.quantity;
    });
    return [subtotal, savings];
  };
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-text-container">
          <div className="checkout-text1">Home &gt;</div>
          <div className="checkout-text2">Grocery Offers &gt;</div>
          <div className="checkout-text3">My Cart &gt;</div>
          <div className="checkout-text4">Checkout</div>
        </div>
        <div className="checkout-left-container">
          <div className="checkout-address-container">
            <div className="checkout-address-icon">
              <GoLocation />
            </div>
            <div className="checkout-address-heading">Delivery Address</div>
            <div className="checkout-address">
              B-1 Times Square Building Near Marol Metro Station, Andheri - Kurla Rd,
              Andheri East, Mumbai, Maharashtra 400059
            </div>
            <button type="button" className="btn btn-success checkout-change-btn1">
              Change
            </button>
          </div>
          <hr />

          <div className="checkout-delivery-container">
            <div className="checkout-delivery-icon">
              <AiOutlineCalendar />
            </div>
            <div className="checkout-delivery-heading">Delivery Options</div>
            <div className="checkout-delivery">Default Delivery Option</div>
            <button type="button" className="btn btn-success checkout-change-btn">
              Change
            </button>
          </div>
          <hr />
          {/* vendor 1 start */}
          <div className="checkout-vendor1-container">
            <div className="checkout-vendor1-details">
              <div className="checkout-vendor1">Shipment 1:</div>
              <div className="checkout-vendor1-logo"><img src="images/image 97.png" alt="cart" /></div>
            </div>
            <div className="checkout-product-container">
              {Array.isArray([...amazon]) ? (
                [...amazon].map((product, key) => {
                  return (
                   
                    <div className="checkout-product-block"  key={key}>
                      <img className="checkout-product-image" src={product.image} alt="cart" />
                    </div>
                   
                  );
                })
              ) : (
                <></>
              )}
             
            </div>
            
            <div className="checkout-viewmore">View {amazon.size} items</div>
            <div className="checkout-delivery">
              Delivery Charges: <span>₹0</span>
            </div>
            <div className="checkout-deliveryTime-container">
              <div className="checkout-deliveryTime-icon">
                <BiTime />
              </div>
              <div className="checkout-deliveryTime-text">
                Delivery by <span>Tommorrow, between 6:00 PM - 8:00 PM</span>
              </div>
            </div>
            <hr />
          </div>
          {/* Vendor 1 end */}

          {/* Vendor 2 start */}
          <div className="checkout-vendor1-container">
            <div className="checkout-vendor1-details">
              <div className="checkout-vendor1">Shipment 1:</div>
              <div className="checkout-vendor1-logo"><img src="images/image 98.png" alt="cart" /></div>
            </div>
            <div className="checkout-product-container">
              {Array.isArray([...bigBasket]) ? (
                [...bigBasket].map((product, key) => {
                  return (
                  
                    <div className="checkout-product-block" key={key}>
                      <img className="checkout-product-image" src={product.image} alt="cart" />
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
            <div className="checkout-viewmore">View {bigBasket.size} items</div>
            <div className="checkout-delivery">
  Delivery Charges: <span>₹0</span>
            </div>
            <div className="checkout-deliveryTime-container">
              <div className="checkout-deliveryTime-icon">
                <BiTime />
              </div>
              <div className="checkout-deliveryTime-text">
    Delivery by <span>Tommorrow, between 6:00 PM - 8:00 PM</span>
              </div>
            </div>
            <hr />
          </div>
          {/* Vendor 2 end */}

          {/* Vendor 3 start */}
          <div className="checkout-vendor1-container">
            <div className="checkout-vendor1-details">
              <div className="checkout-vendor1">Shipment 1:</div>
              <div className="checkout-vendor1-logo"><img src="images/image 102.png" alt="cart" /></div>
            </div>
            <div className="checkout-product-container">
              {Array.isArray([...blinkit]) ? (
                [...blinkit].map((product, key) => {
                  return (
                    <div className="checkout-product-block"  key={key}>
                      <img className="checkout-product-image" src={product.image} alt="cart" />
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
            <div className="checkout-viewmore">View {blinkit.size} items</div>
            <div className="checkout-delivery">
  Delivery Charges: <span>₹0</span>
            </div>
            <div className="checkout-deliveryTime-container">
              <div className="checkout-deliveryTime-icon">
                <BiTime />
              </div>
              <div className="checkout-deliveryTime-text">
    Delivery by <span>Tommorrow, between 6:00 PM - 8:00 PM</span>
              </div>
            </div>
            <hr />
          </div>
          {/* Vendor 3 end */}
          {/* Vendor 2 start */}
          {/* <div className="checkout-vendor1-container">
            <div className="checkout-vendor1-details">
              <div className="checkout-vendor1">Shipment 2:</div>
              <div className="checkout-vendor1-logo"><img src="images/image 97.png" alt="cart" /></div>
            </div>
            <div className="checkout-product-container">
              <div className="checkout-product-block">
                <div className="checkout-product-image"></div>
              </div>
              <div className="checkout-product-block">
                <div className="checkout-product-image"></div>
              </div>
              <div className="checkout-product-block">
                <div className="checkout-product-image"></div>
              </div>
            </div>
            <div className="checkout-viewmore">View 2 items</div>
            <div className="checkout-delivery">
              Delivery Charges: <span>₹0</span>
            </div>
            <div className="checkout-deliveryTime-container">
              <div className="checkout-deliveryTime-icon">
                <BiTime />
              </div>
              <div className="checkout-deliveryTime-text">
                Delivery by <span>Tommorrow, between 11:00 AM - 3:00 PM</span>
              </div>
            </div>
          </div> */}
          <Link to="/payment">
            <button type="button" className="btn btn-success checkout-payment-btn">
            Continue to Payment
            </button>
          </Link>
          <hr />
          <div className="checkout-payment-container">
            <div className="checkout-payment-icon">
              <MdOutlinePayments />
            </div>
            <div className="checkout-payment-text">Payment Options with offers</div>
          </div>
          <hr />
          <div className="checkout-otherPayment-container">
            <div className="checkout-otherPayment-icon">
              <MdOutlinePayments />
            </div>
            <div className="checkout-otherPayment-text">Other Payment Options</div>
          </div>
        </div>
        <div className="checkout-right-container">
          <div className="checkout-right-heading">Apply Voucher</div>
          <div className="input-group checkout-input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Enter voucher code"
            />
            <button type="button" className="btn checkout-apply-btn">
              Apply
            </button>
          </div>
          <div className="checkout-voucher-container">
            <div className="checkout-voucher-text">7 Vouchers Available</div>
          </div>
          <hr />
          <div className="checkout-right-orderSummary">Order Summary</div>
          <span className="checkout-basketValue">Basket Value</span>
          <span className="checkout-price">₹ {total()[0]}</span>
          <div className="form-check checkout-checkbox-container">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked
            />
            <label className="form-check-label checkout-checkbox-text">
              Redeemed Loyalty Points
            </label>
            <span>₹13</span>
            <div className="checkout-balance">Balance: 13 points</div>
          </div>
          <hr />
          <div className="checkout-right-totalAmount">
            <span>Total Amount Payable</span>
            <span className="checkout-amount">₹ {total()[0]}</span>
          </div>
          <div className="checkout-right-saving-container">
            <div className="checkout-saving-left">Total Savings</div>
            <div className="checkout-saving-right">₹ {total()[1]}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
