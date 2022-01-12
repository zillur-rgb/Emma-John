import React from "react";
import "./cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const price = cart.reduce((total, prc) => total + prc.price, 0);

  let shippingCost = 0;
  if (price < 15) {
    shippingCost = 12.99;
  } else if (price < 35) {
    shippingCost = 4.99;
  } else {
    shippingCost = 0;
  }

  const tax = price / 10;
  return (
    <div>
      <h2 className="summary">Order Summary</h2>
      <h3 className="added-items">Items Added to Cart: {cart.length}</h3>
      <p className="info">Price : {price}</p>
      <p className="info">Shipping Cost : {shippingCost}</p>
      <p className="info">Vat / Tax : {tax}</p>
      <h3 className="total">Total Price : {price + shippingCost + tax}</h3>
    </div>
  );
};

export default Cart;
