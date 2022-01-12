import React from "react";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = (props) => {
  // console.log(props.product);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product-div">
      <img src={img} alt="product" />
      <div className="desc">
        <h4 className="product-title">{name}</h4>
        <p>by {seller}</p>
        <h4>${price}</h4>
        <p>Only {stock} stock remaining - Order fast</p>
        <button
          className="btn-cart"
          onClick={() => {
            props.handleAddProducts(props.product);
          }}
        >
          <div>
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </div>
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
