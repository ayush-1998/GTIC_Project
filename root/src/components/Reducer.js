Array.prototype.hasMin = function (attrib) {
  return (
    (this.length &&
      this.reduce(function (prev, curr) {
        return prev[attrib] < curr[attrib] ? prev : curr;
      })) ||
    null
  );
};

const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((item) => item.id !== action.payload.id);
  }

  if (action.type === "INCREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcart;
  }
  return cart;
};
export default Reducer;




   
// <div className="checkout-vendor1-container">
// <div className="checkout-vendor1-details">
//   <div className="checkout-vendor1">Shipment 1:</div>
//   <div className="checkout-vendor1-logo"><img src="images/image 98.png" alt="cart" /></div>
// </div>
// {Array.isArray([...bigBasket]) ? (
//   [...bigBasket].map((product, key) => {
//     return (
//       <div className="checkout-product-container" key={key}>
//         <div className="checkout-product-block">
//           <div>
//             <img className="checkout-product-image" src={product.image} alt="cart" />
//           </div>
//         </div>
//       </div>
//     );
//   })
// ) : (
//   <></>
// )}
// <div className="checkout-viewmore">View {bigBasket.size} items</div>
// <div className="checkout-delivery">
//   Delivery Charges: <span>₹0</span>
// </div>
// <div className="checkout-deliveryTime-container">
//   <div className="checkout-deliveryTime-icon">
//     <BiTime />
//   </div>
//   <div className="checkout-deliveryTime-text">
//     Delivery by <span>Tommorrow, between 6:00 PM - 8:00 PM</span>
//   </div>
// </div>
// <hr />
// </div>

// <div className="checkout-vendor1-container">
// <div className="checkout-vendor1-details">
//   <div className="checkout-vendor1">Shipment 1:</div>
//   <div className="checkout-vendor1-logo"><img src="images/image 102.png" alt="cart" /></div>
// </div>
// {Array.isArray([...blinkit]) ? (
//   [...blinkit].map((product, key) => {
//     return (
//       <div className="checkout-product-container" key={key}>
//         <div className="checkout-product-block">
//           <div>
//             <img className="checkout-product-image" src={product.image} alt="cart" />
//           </div>
//         </div>
//       </div>
//     );
//   })
// ) : (
//   <></>
// )}
// <div className="checkout-viewmore">View {blinkit.size} items</div>
// <div className="checkout-delivery">
//   Delivery Charges: <span>₹0</span>
// </div>
// <div className="checkout-deliveryTime-container">
//   <div className="checkout-deliveryTime-icon">
//     <BiTime />
//   </div>
//   <div className="checkout-deliveryTime-text">
//     Delivery by <span>Tommorrow, between 6:00 PM - 8:00 PM</span>
//   </div>
// </div>
// <hr />
// </div>