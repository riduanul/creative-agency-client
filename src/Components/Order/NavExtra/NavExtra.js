import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";
import "./NavExtra.css";

const NavExtra = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className=" container row nav-style my-2">
      <div className=" pl-5 ml-2 d-flex justify-content-between">
        <Link to="/">
          <img src={logo} alt="logo" width="150" />
        </Link>
      </div>
      <div className=" ml-5 pl-5 mt-3 d-flex justify-content-end">
        <h5><b>Order</b></h5>
        <div>
          <h6 className="name"> {loggedInUser.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default NavExtra;
