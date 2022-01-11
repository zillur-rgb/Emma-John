import React from "react";
import logo from "../../images/logo.png";
import header from "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/oreder-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
