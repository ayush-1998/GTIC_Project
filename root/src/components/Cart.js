/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import { BiTime } from "react-icons/bi";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const [amazon, setAmazon] = useState(new Set());
  const [bigBasket, setBigBasket] = useState(new Set());
  const [blinkit, setBlinkIt] = useState(new Set());
  //const [total,setTotal] = useState(0);
  // console.log(cart[0].Vendor.reduce((min, b) => Math.min(min, b.offerPrice), cart[0].Vendor[0]));
  Array.prototype.hasMin = function (attrib) {
    return (
      (this.length &&
        this.reduce(function (prev, curr) {
          return prev[attrib] < curr[attrib] ? prev : curr;
        })) ||
      null
    );
  };
  //console.log(cart[0].Vendor.hasMin("offerPrice").name);
  useEffect(() => {
    setCart();
  }, [cart]);

  function setCart() {
    setAmazon(new Set());
    setBigBasket(new Set());
    setBlinkIt(new Set());
    cart.forEach((product) => {
      if (product.Vendor.hasMin("offerPrice").name === "Amazon") {
        setAmazon((amazon) => new Set(amazon).add(product));
        //setTotal((total) => total+=product.Vendor[0].offerPrice*product.quantity);
        console.log(total);
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

  // const addition = (acc, currentvalue) => {
  //   return acc + currentvalue.Vendor[0].offerPrice * currentvalue.quantity;
  // };
  // const total = cart.reduce(addition, 0);
  // console.log(total);

  const removeProduct = (product) => {
    dispatch({ type: "REMOVE", payload: product });
    setCart();
  };

  const handleQuantity = (e, product, name) => {
    e.preventDefault();
    if (name === "incQuantity") {
      dispatch({ type: "INCREASE", payload: product });
      console.log(product);
    }

    if (name === "decrQuantity") {
      if (product.quantity <= 1) dispatch({ type: "REMOVE", payload: product });
      else dispatch({ type: "DECREASE", payload: product });
    }
    setCart();
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

  // console.log(tatal[0])
  return (
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
        {/* 1st Vendor Start */}
        <div className="cart1-container">
          {amazon.size!=0 ? (
            <>
              <div className="row">
                <div className="cart-vendor-logo col-8">
                  <p style={{ fontWeight: 600,marginLeft:"20px" }}>Items</p>
                </div>
                <div className="col-1 vendor-border">
                  <img
                    className="amazon-vendor-logo-size"
                    src="images/image 97.png"
                    alt="cart"
                  />
                </div>
                <div className="col-1 vendor-border">
                  <img
                    className="vendor-logo-size"
                    src="images/image 98.png"
                    alt="cart"
                  />
                </div>
                <div className="col-1">
                  <img
                    className="vendor-logo-size"
                    src="images/image 102.png"
                    alt="cart"
                  />
                </div>
              </div>
              {Array.isArray([...amazon]) ? (
                [...amazon].map((product, key) => {
                  return (
                    <>
                      <div className="cart-product-container row" key={key}>
                        <div className="cart-product-image col-2">
                          <img src={product.image} alt="cart" />
                        </div>
                        <div className="cart-productDetail-container col-4">
                          <div className="cart-product-brand">
                        Brand : <span>{product.brand}</span>
                          </div>
                          <div className="cart-product-detail">{product.title}</div>
                        </div>
                        <div className="cart-quantity-container col-2">
                          <div className="cart-quantity">Quantity</div>
                          <div className="quantity-button">
                            <div className="row mt-1">
                              <div className="row">
                                <div className="input-group mb-1 col-12">
                                  <button
                                    className="input-group-text col-4"
                                    name="decrQuantity"
                                    onClick={(e) => {
                                      handleQuantity(e, product, "decrQuantity");
                                    }}
                                  >
                                -
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control col-4"
                                    value={product.quantity}
                                  />
                                  <button
                                    className="input-group-text col-4"
                                    name="incQuantity"
                                    onClick={(e) => {
                                      handleQuantity(e, product, "incQuantity");
                                    }}
                                  >
                                +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cart-quantity-text">
                            <span
                              type="button"
                              onClick={() => {
                                removeProduct(product);
                              }}
                            >
                          Delete
                            </span>
                            <span className="cart-saveFor">Save for later</span>
                          </div>
                        </div>

                        <div className="cart-product-price cart-product-price-border col-1">
                          <p style={{ marginTop: "20px" }}>
                        ₹{" "}
                            {product.Vendor.reduce(
                              (min, b) => Math.min(min, b.offerPrice),
                              product.Vendor[0].offerPrice,
                            ) * product.quantity}
                          </p>
                        </div>
                        <div className="cart-product-price cart-product-price-border col-1">
                          <p style={{ marginTop: "20px" }}>
                        ₹ {product.Vendor[1].offerPrice * product.quantity}
                          </p>
                        </div>
                        <div className="cart-product-price col-1">
                          <p style={{ marginTop: "20px" }}>
                        ₹ {product.Vendor[2].offerPrice * product.quantity}
                          </p>
                        </div>
                      </div>
                      <hr
                        style={{
                          margin: "0rem",
                          border: "1px solid rgb(207, 207, 207)",
                        }}
                      />
                    </>
                  );
                })
              ) : (
                <></>
              )}

              <div className="cart-delivery-container">
                <div className="cart-delivery-icon">
                  <BiTime />
                </div>
                <div className="cart-delivery-text">
              Delivery by Tommorrow, between 6:00 PM - 8:00 PM
                </div>
              </div>
              <hr
                style={{
                  margin: "0rem",
                  border: "1px solid rgb(207, 207, 207)",
                }}
              />
            </>
          ) : (
            <></>
          )}
      
          
          {/* First vendor end */}
          {/* second vendor start */}
          
          {bigBasket.size!=0 ? (
            <>
              <div className="cart1-container">
                <div className="row vendor-logo-size1">
                  <div className="cart-vendor-logo col-8">
                    <p style={{ fontWeight: 600,marginLeft:"20px" }}>Items</p>
                  </div>
                  <div className="col-1 vendor-border">
                    <img
                      className="vendor-logo-size"
                      src="images/image 98.png"
                      alt="cart"
                    />
                  </div>
                  <div className="col-1 vendor-border">
                    <img
                      className="amazon-vendor-logo-size"
                      src="images/image 97.png"
                      alt="cart"
                    />
                  </div>
                  <div className="col-1 ">
                    <img
                      className="vendor-logo-size"
                      src="images/image 102.png"
                      alt="cart"
                    />
                  </div>
                </div>
                {Array.isArray([...bigBasket]) ? (
                  [...bigBasket].map((product, key) => {
                    return (
                      <>
                        <div className="cart-product-container row" key={key}>
                          <div className="cart-product-image col-2">
                            <img src={product.image} alt="cart" />
                          </div>
                          <div className="cart-productDetail-container col-4">
                            <div className="cart-product-brand">
                          Brand : <span>{product.brand}</span>
                            </div>
                            <div className="cart-product-detail">{product.title}</div>
                          </div>
                          <div className="cart-quantity-container col-2">
                            <div className="cart-quantity">Quantity</div>
                            <div className="quantity-button">
                              <div className="row mt-1">
                                <div className="row">
                                  <div className="input-group mb-1 col-12">
                                    <button
                                      className="input-group-text col-4"
                                      name="decrQuantity"
                                      onClick={(e) => {
                                        handleQuantity(e, product, "decrQuantity");
                                      }}
                                    >
                                  -
                                    </button>
                                    <input
                                      type="text"
                                      className="form-control col-4"
                                      value={product.quantity}
                                    />
                                    <button
                                      className="input-group-text col-4"
                                      name="incQuantity"
                                      onClick={(e) => {
                                        handleQuantity(e, product, "incQuantity");
                                      }}
                                    >
                                  +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cart-quantity-text">
                              <span
                                type="button"
                                onClick={() => {
                                  removeProduct(product);
                                }}
                              >
                            Delete
                              </span>
                              <span className="cart-saveFor">Save for later</span>
                            </div>
                          </div>

                          <div className="cart-product-price cart-product-price-border col-1">
                            <p style={{ marginTop: "20px" }}>
                          ₹{" "}
                              {product.Vendor.reduce(
                                (min, b) => Math.min(min, b.offerPrice),
                                product.Vendor[0].offerPrice,
                              ) * product.quantity}
                            </p>
                          </div>
                          <div className="cart-product-price cart-product-price-border col-1">
                            <p style={{ marginTop: "20px" }}>
                          ₹ {product.Vendor[0].offerPrice * product.quantity}
                            </p>
                          </div>
                          <div className="cart-product-price col-1">
                            <p style={{ marginTop: "20px" }}>
                          ₹ {product.Vendor[2].offerPrice * product.quantity}
                            </p>
                          </div>
                        </div>
                        <hr
                          style={{
                            margin: "0rem",
                            border: "1px solid rgb(207, 207, 207)",
                          }}
                        />
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>

              <div className="cart-delivery-container">
                <div className="cart-delivery-icon">
                  <BiTime />
                </div>
                <div className="cart-delivery-text">
              Delivery by Tommorrow, between 6:00 PM - 8:00 PM
                </div>
              </div>
              <hr
                style={{
                  margin: "0rem",
                  border: "1px solid rgb(207, 207, 207)",
                }}
              />
            </>
          ) : (
            <></>
          )}
            

          {/* second vendor end */}

          {/* Third vendor start */}
          {blinkit.size!=0 ? (
            <>
              <div className="cart1-container">
                <div className="row vendor-logo-size1">
                  <div className="cart-vendor-logo col-8">
                    <p style={{ fontWeight: 600,marginLeft:"20px" }}>Items</p>
                  </div>
                  <div className="col-1 vendor-border">
                    <img
                      className="vendor-logo-size"
                      src="images/image 102.png"
                      alt="cart"
                    />
                  </div>
                  <div className="col-1 vendor-border">
                    <img
                      className="amazon-vendor-logo-size"
                      src="images/image 97.png"
                      alt="cart"
                    />
                  </div>
                  <div className="col-1 ">
                    <img
                      className="vendor-logo-size"
                      src="images/image 98.png"
                      alt="cart"
                    />
                  </div>
                </div>
                {Array.isArray([...blinkit]) ? (
                  [...blinkit].map((product, key) => {
                    return (
                      <>
                        <div className="cart-product-container row" key={key}>
                          <div className="cart-product-image col-2">
                            <img
                              src={product.image}
                              alt="cart"
                            />
                          </div>
                          <div className="cart-productDetail-container col-4">
                            <div className="cart-product-brand">
                          Brand : <span>{product.brand}</span>
                            </div>
                            <div className="cart-product-detail">{product.title}</div>
                          </div>
                          <div className="cart-quantity-container col-2">
                            <div className="cart-quantity">Quantity</div>
                            <div className="quantity-button">
                              <div className="row mt-1">
                                <div className="row">
                                  <div className="input-group mb-1 col-12">
                                    <button
                                      className="input-group-text col-4"
                                      name="decrQuantity"
                                      onClick={(e) => {
                                        handleQuantity(e, product, "decrQuantity");
                                      }}
                                    >
                                  -
                                    </button>
                                    <input
                                      type="text"
                                      className="form-control col-4"
                                      value={product.quantity}
                                    />
                                    <button
                                      className="input-group-text col-4"
                                      name="incQuantity"
                                      onClick={(e) => {
                                        handleQuantity(e, product, "incQuantity");
                                      }}
                                    >
                                  +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cart-quantity-text">
                              <span
                                type="button"
                                onClick={() => {
                                  removeProduct(product);
                                }}
                              >
                            Delete
                              </span>
                              <span className="cart-saveFor">Save for later</span>
                            </div>
                          </div>

                          <div className="cart-product-price cart-product-price-border col-1">
                            <p style={{ marginTop: "20px" }}>
                          ₹{" "}
                              {product.Vendor.reduce(
                                (min, b) => Math.min(min, b.offerPrice),
                                product.Vendor[0].offerPrice,
                              ) * product.quantity}
                            </p>
                          </div>
                          <div className="cart-product-price cart-product-price-border col-1">
                            <p style={{ marginTop: "20px" }}>
                          ₹ {product.Vendor[0].offerPrice * product.quantity}
                            </p>
                          </div>
                          <div className="cart-product-price col-1">
                            <p style={{ marginTop: "20px" }}>
                          ₹ {product.Vendor[1].offerPrice * product.quantity}
                            </p>
                          </div>
                        </div>
                        <hr
                          style={{
                            margin: "0rem",
                            border: "1px solid rgb(207, 207, 207)",
                          }}
                        />
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>

              <div className="cart-delivery-container">
                <div className="cart-delivery-icon">
                  <BiTime />
                </div>
                <div className="cart-delivery-text">
              Delivery by Tommorrow, between 6:00 PM - 8:00 PM
                </div>
              </div>
              <hr
                style={{
                  margin: "0rem",
                  border: "1px solid rgb(207, 207, 207)",
                }}
              />
            </>
          ) : (
            <></>
          )}
            

          <div className="cart-checkoutPrice-container">
            <div className="cart-chekoutPrice-left">
              <div className="cart-subtotal">Subtotal ({cart.length} items): ₹ {total()[0]}</div>
              <div className="cart-saving"> Saving: ₹ {total()[1]}</div>
            </div>
            <Link to="/checkout">
              <div className="cart-chekoutPrice-right">
                <button type="button" className="btn btn-success cart-checkout-btn">
                  Checkout
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
