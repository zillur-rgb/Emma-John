import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  console.log(props.product);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product-div">
      <img src={img} alt="product" />
      <div className="desc">
        <h4 className="product-title">{name}</h4>
        <p>by {seller}</p>
        <h4>${price}</h4>
        <p>Only {stock} stock remaining - Order fast</p>
      </div>
    </div>
  );
};

export default SingleProduct;
