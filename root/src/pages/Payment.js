/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "../styles/Payment.css";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar, AiOutlineCreditCard, AiFillBank } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";
import { MdOutlinePayments, MdOutlineFastfood } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
import { SiRazorpay } from "react-icons/si";
import { RxCaretRight } from "react-icons/rx";
import { useSelector } from "react-redux";

const Payment = () => {
  const cart = useSelector((state) => state);
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
      <div className="payment-container">
        <div className="payment-text-container">
          <div className="payment-text1">Home &gt;</div>
          <div className="payment-text2">Grocery Offers &gt;</div>
          <div className="payment-text3">My Cart &gt;</div>
          <div className="payment-text4">Checkout</div>
        </div>
        <div className="payment-left-container">
          <div className="payment-address-container">
            <div className="payment-address-icon">
              <GoLocation />
            </div>
            <div className="payment-address-heading">Delivery Address</div>
            <div className="payment-address">
              ROW HOUSE-6, CASSIA, Lane, opp. Krushna Medical, Pune, Maharashtra
              411045
            </div>
            <button type="button" className="btn btn-success payment-change-btn1">
              Change
            </button>
          </div>
          <hr />

          <div className="payment-delivery-container">
            <div className="payment-delivery-icon">
              <AiOutlineCalendar />
            </div>
            <div className="payment-delivery-heading">Delivery Options</div>
            <div className="payment-delivery">Default Delivery Option</div>
            <button type="button" className="btn btn-success payment-change-btn">
              Change
            </button>
          </div>
          <hr />
          <div className="payment-option-heading-container">
            <div className="payment-option-heading-icon">
              <MdOutlinePayments />
            </div>
            <div className="payment-option-heading-text">
              Payment Options with offers
            </div>
          </div>
          <div className="payment-option-container">
            <div className="payment-option-items">
              <div className="payment-option-logo">
                <img
                  src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
                  alt="logo"
                />
              </div>
              <div className="payment-option-heading">Paytm</div>

              <input
                className="form-check-input payment-option-radio"
                type="radio"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="payment-option-text">
              <div>
                <CiPercent />
              </div>
              Get ₹25 - 500 Cashback, minimum order ₹750 valid once. Avail cashback
              through scratch card on Paytm App.
            </div>
          </div>
          {/* <div className="payment-option">
              <div className="form-check payment-form-check">
                <label className="form-check-label payment-form-label">Paytm</label>
                <input
                  className="form-check-input payment-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <div className="payment-option-text">
                  <div>
                    <CiPercent />
                  </div>
                  Get ₹25 - 500 Cashback, minimum order ₹750 valid once. Avail
                  cashback through scratch card on Paytm App.
                </div>
              </div>
            </div> */}

          <hr />
          <div className="payment-option-container">
            <div className="payment-option-items">
              <div className="">
                <img
                  className="freecharge-img"
                  src="https://e7.pngegg.com/pngimages/248/47/png-clipart-freecharge-gurugram-mobile-phones-payment-customer-service-sbi-mutual-fund-orange-logo-thumbnail.png"
                  alt="logo"
                />
              </div>
              <div className="payment-option-heading">Freecharge</div>

              <input
                className="form-check-input payment-option-radio"
                type="radio"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="payment-option-text">
              <div>
                <CiPercent />
              </div>
              Flat ₹50 cashback on minimum order value of ₹1500; once per user.
            </div>
          </div>
          <hr />
          <div className="payment-option-container">
            <div className="payment-option-items">
              <div className="payment-option-logo">
                <img
                  className="mobikwik-img"
                  src="https://i0.wp.com/logotaglines.com/wp-content/uploads/2021/11/MobiKwik-Logo-Tagline-Slogan-Founder.jpg?fit=640%2C640&ssl=1"
                  alt="logo"
                />
              </div>
              <div className="payment-option-heading">Mobikwik</div>

              <input
                className="form-check-input payment-option-radio"
                type="radio"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="payment-option-text">
              <div>
                <CiPercent />
              </div>
              Get Up to ₹500 cashback. Minimum order ₹1500. Valid once per user.
              Assured Cashback ₹30
            </div>
          </div>
          <hr />
          <div className="payment-option-heading-container">
            <div className="payment-option-heading-icon">
              <MdOutlinePayments />
            </div>
            <div className="payment-option-heading-text">Other Payment Options</div>
          </div>
          <div className="payment-otherPayment">
            <div className="payment-otherPayment-icon">
              <SiRazorpay></SiRazorpay>
            </div>
            <div className="payment-otherPayment-text">UPI Apps</div>
          </div>
          <div className="payment-upi-container">
            <div className="payment-upi-block">
              <div className="payment-upi-image">
                <img
                  className="googlepay-img"
                  src="https://lh3.googleusercontent.com/RkN2IcvWd4DWNTVbh8Ma2G77D42Gd5HP0Deydf9FmzbDUMxLNsmWUSE8k562PgEPKzmF_OGWIiySxhdLUdNcxJ3t8kc7JugTaAhHYA"
                  alt="logo"
                />
              </div>
              <div className="payment-upi-text">Google Pay</div>
            </div>
            <div className="payment-upi-block">
              <div className="payment-upi-image">
                <img
                  className="paytm-img"
                  src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.png"
                  alt="logo"
                />
              </div>
              <div className="payment-upi-text2">Paytm</div>
            </div>
          </div>
          <hr />
          <div className="payment-otherPayment">
            <div className="payment-otherPayment-icon">
              <AiOutlineCreditCard />
            </div>
            <div className="payment-otherPayment-text">Credit / Debit Card</div>
            <div className="payment-otherPayment-rightIcon">
              <RxCaretRight />
            </div>
          </div>
          <hr />
          <div className="payment-otherPayment">
            <div className="payment-otherPayment-icon">
              <BsWallet2 />
            </div>
            <div className="payment-otherPayment-text">Wallets</div>
            <div className="payment-otherPayment-rightIcon">
              <RxCaretRight />
            </div>
          </div>
          <hr />
          <div className="payment-otherPayment">
            <div className="payment-otherPayment-icon">
              <MdOutlineFastfood></MdOutlineFastfood>
            </div>
            <div className="payment-otherPayment-text">Food Cards / Sodexo</div>
            <div className="payment-otherPayment-rightIcon">
              <RxCaretRight />
            </div>
          </div>
          <hr />
          <div className="payment-otherPayment">
            <div className="payment-otherPayment-icon">
              <MdOutlinePayments />
            </div>
            <div className="payment-otherPayment-text">Pay Later</div>
            <div className="payment-otherPayment-rightIcon">
              <RxCaretRight />
            </div>
          </div>
          <hr />
          <div className="payment-otherPayment">
            <div className="payment-otherPayment-icon">
              <AiFillBank />
            </div>
            <div className="payment-otherPayment-text">Net Banking</div>
            <div className="payment-otherPayment-rightIcon">
              <RxCaretRight />
            </div>
          </div>
          <hr />
          <div className="payment-cod-container">
            <div className="payment-otherPayment-icon">
              <HiOutlineCash></HiOutlineCash>
            </div>
            <div className="payment-otherPayment-text">Cash on Delivery</div>
            <div>
              <input
                className="form-check-input payment-radio"
                type="radio"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </div>
          <div>
            <div className="payment-text">
              Tip: To ensure a contactless delivery, we recommend you use an online
              payment method
            </div>
            <div className="form-check">
              <input
                className="payment-check"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label payment-label-text">
                Make this as my default payment option
              </label>
            </div>
          </div>

          <button type="button" className="btn btn-success payment-payment-btn">
            Place order & Pay
          </button>
        </div>

        {/* right part */}
        <div className="payment-right-container">
          <div className="payment-right-heading">Apply Voucher</div>
          <div className="input-group payment-input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Enter voucher code"
            />
            <button type="button" className="btn payment-apply-btn">
              Apply
            </button>
          </div>
          <div className="payment-voucher-container">
            <div className="payment-voucher-text">7 Vouchers Available</div>
          </div>
          <hr />
          <div className="payment-right-orderSummary">Order Summary</div>
          <span className="payment-basketValue">Basket Value</span>
          <span className="payment-price">₹ {total()[0]}</span>
          <div className="form-check payment-checkbox-container">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked
            />
            <label className="form-check-label payment-checkbox-text">
              Redeemed Loyalty Points
            </label>
            <span>₹13</span>
            <div className="payment-balance">Balance: 13 points</div>
          </div>
          <hr />
          <div className="payment-right-totalAmount">
            <span>Total Amount Payable</span>
            <span className="payment-amount">₹ {total()[0]}</span>
          </div>
          <div className="payment-right-saving-container">
            <div className="payment-saving-left">Total Savings</div>
            <div className="payment-saving-right">₹ {total()[1]}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
