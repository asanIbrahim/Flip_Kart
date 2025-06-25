import React, {  useState } from "react";
import "./LoginModal.css";
import { RxCross2 } from "react-icons/rx";
import supabase from "../../supabase";
import { setUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);
  const dispatch = useDispatch()
  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(data, error);
    if (data.user) {
      alert("Account Created Please verify your mail id");
    }
  };

  const login = async () => {
    const {data  ,error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return  alert(error.message);
    }
    dispatch(setUser(data.user))
  };
  return isOpen ? (
    <div className="overlay">
      <div className="LoginModal">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="Login-des">
              Get acess your Orders, wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="Login-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termandconditions">
            By Continuing, You agree to flipkart's{" "}
            <span style={{ color: "blue" }}> Terms of use</span> and
            <span style={{ color: "blue" }}> Privacy policy</span>
          </p>
          {loginType ? (
            <button className="Login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login-btn" onClick={signUp}>
              Signup
            </button>
          )}
          {loginType ? (
            <p className="Login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLoginType(true)}>
              Alredy an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
