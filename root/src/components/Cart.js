/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import { BiTime } from "react-icons/bi";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";

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
        <div className="cart1-container">
          <div className="cart-vendor-logo">
            <img src="images/image 97.png" alt="cart" />
          </div>
          {Array.isArray([...amazon]) ? (
            [...amazon].map((product, key) => {
              return (
                <div className="cart-product-container" key={key}>
                  <div className="cart-product-image">
                    <img src={product.image} alt="cart" />
                  </div>
                  <div className="cart-productDetail-container">
                    <div className="cart-product-brand">
                      Brand : <span>{product.brand}</span>
                    </div>
                    <div className="cart-product-detail">{product.title}</div>
                  </div>
                  <div className="cart-quantity-container">
                    <div className="cart-quantity">Quantity</div>
                    <div className="quantity-button">
                      <div className="row mt-1">
                        <div className="row">
                          <div className="input-group mb-3 col-12">
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
                  <div className="cart-product-price">
                    ₹{" "}
                    {product.Vendor.reduce(
                      (min, b) => Math.min(min, b.offerPrice),
                      product.Vendor[0].offerPrice,
                    ) * product.quantity}
                  </div>
                  <table>
                    <tr>
                      <th>logo</th>
                      <th>logo</th>
                     
                    </tr>
                    <tr>
                      <td>price</td>
                      <td>price</td>
                     
                    </tr>
                  </table>
                </div>
              );
            })
          ) : (
            <></>
          )}

          <hr />

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
          {/* First vendor end */}
          {/* second vendor start */}
          <div className="cart1-container">
            <div className="cart-vendor-logo">
              <img src="images/image 98.png" alt="cart" />
            </div>
            {Array.isArray([...bigBasket]) ? (
              [...bigBasket].map((product, key) => {
                return (
                  <div className="cart-product-container" key={key}>
                    <div className="cart-product-image">
                      <img src={product.image} alt="product" />
                    </div>
                    <div className="cart-productDetail-container">
                      <div className="cart-product-brand">
                        Brand : <span>{product.brand}</span>
                      </div>
                      <div className="cart-product-detail">{product.title}</div>
                    </div>
                    <div className="cart-quantity-container">
                      <div className="cart-quantity">Quantity</div>
                      <div className="quantity-button">
                        <div className="row mt-1">
                          <div className="row">
                            <div className="input-group mb-3 col-12">
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
                          onClick={() => {
                            removeProduct(product);
                          }}
                        >
                          Delete
                        </span>
                        <span className="cart-saveFor">Save for later</span>
                      </div>
                    </div>
                    <div className="cart-product-price">
                      ₹{" "}
                      {product.Vendor.reduce(
                        (min, b) => Math.min(min, b.offerPrice),
                        product.Vendor[1].offerPrice,
                      ) * product.quantity}
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
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

          {/* second vendor end */}

          {/* Third vendor start */}
          <div className="cart1-container">
            <div className="cart-vendor-logo">
              <img src="images/image 102.png" alt="cart" />
            </div>
            {Array.isArray([...blinkit]) ? (
              [...blinkit].map((product, key) => {
                return (
                  <div className="cart-product-container" key={key}>
                    <div className="cart-product-image">
                      <img src={product.image} alt="product" />
                    </div>
                    <div className="cart-productDetail-container">
                      <div className="cart-product-brand">
                        Brand : <span>{product.brand}</span>
                      </div>
                      <div className="cart-product-detail">{product.title}</div>
                    </div>
                    <div className="cart-quantity-container">
                      <div className="cart-quantity">Quantity</div>
                      <div className="quantity-button">
                        <div className="row mt-1">
                          <div className="row">
                            <div className="input-group mb-3 col-12">
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
                          onClick={() => {
                            removeProduct(product);
                          }}
                        >
                          Delete
                        </span>
                        <span className="cart-saveFor">Save for later</span>
                      </div>
                    </div>
                    <div className="cart-product-price">
                      ₹{" "}
                      {product.Vendor.reduce(
                        (min, b) => Math.min(min, b.offerPrice),
                        product.Vendor[2].offerPrice,
                      ) * product.quantity}
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
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
              <div className="cart-subtotal">Subtotal (6 items): ₹ {total()[0]}</div>
              <div className="cart-saving"> Saving: ₹ {total()[1]}</div>
            </div>
            <div className="cart-chekoutPrice-right">
              <button type="button" className="btn btn-success cart-checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
