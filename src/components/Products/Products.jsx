import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Products.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);

  return (
    <div className="product-container">
      <div className="product-part">
        {products.map((product) => (
          <SingleProduct product={product} key={product.key}>
            {product.name}
          </SingleProduct>
        ))}
      </div>

      <div className="cart-part">
        <h3>This is cart</h3>
      </div>
    </div>
  );
};

export default Products;
