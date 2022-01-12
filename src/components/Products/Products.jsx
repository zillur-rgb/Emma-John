import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Products.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import Cart from "../Cart/Cart";

const Products = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart, setCart] = useState([]);

  const handleAddProducts = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);
  };
  return (
    <div className="product-container">
      <div className="product-part">
        {products.map((product) => (
          <SingleProduct
            product={product}
            key={product.key}
            handleAddProducts={handleAddProducts}
          >
            {product.name}
          </SingleProduct>
        ))}
      </div>

      <div className="cart-part">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
