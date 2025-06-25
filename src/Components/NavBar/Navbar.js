import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import LoginModal from "../LoginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../../supabase";
import { removeUser } from "../../slices/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  console.log(user);

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      dispatch(removeUser());
    }
  };

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

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
              placeholder="Search for Products,brands and more"
              className="navbar-input"
              name="navInput"
            />
            <button className="searchButton">
              <IoSearch />
            </button>
          </div>
          {user ? (
            <button onClick={ logOut}>@{user?.email.slice(0, 8)}</button>
          ) : (
            <button className="navbar-login" onClick={() => setIsOpen(true)}>
              Login
            </button>
          )}
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
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Navbar;
