import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar-Container">
        <div className="navbar">
          <Link to={"/"}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipcartlogo"
              className="navbar-logo"
            />
          </Link>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search for Product , brands and more"
              className="navbar-input"
            />
            <button className="searchButton">
              <IoSearch />
            </button>
            <button className="navbar-login">Login</button>
            <div className="navbar-bcs">
              <h3>Become a seller</h3>
            </div>
            <div className="navbar-more">
              <h3>
                More
                <i className="moreDown">
                  <MdKeyboardDoubleArrowDown />
                </i>
              </h3>
            </div>
            <div className="navbar-cart">
              <div className="cart-icon">
                <FaShoppingCart />
              </div>
              <Link to={"/cart"} className="cart">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
