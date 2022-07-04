import React, { useContext, useEffect, useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBasket,
  faCommentAlt,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";

const SideBar = () => {
  const [loggedInUser] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://thawing-cliffs-32104.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div className="container">
      <div className="sideBar-style mt-3 ">
        <div className=" pl-2 ml-2 mt-5 d-flex justify-content-between">
          <Link to="/">
            <img src={logo} alt="logo" width="150" />
          </Link>
        </div>
        <div>
      
            <ul className=" sidebar-li mt-5">
              <Link to="/serviceslist" >
                <li>
                  <FontAwesomeIcon icon={faShoppingBasket} />{" "}
                  <a href="/serviceslist">Services list</a>{" "}
                </li>
              </Link>
              <Link to="/addservice">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> <a href="/addservice">Add Service</a>{" "}
                </li>
              </Link>
              <Link to="/makeadmin">
                <li>
                  <FontAwesomeIcon icon={faUserPlus} /> <a href="/makeadmin">Make Admin</a>
                </li>
              </Link>

              <Link to="/order">
                <li>
                  <FontAwesomeIcon icon={faShoppingCart} /> <a href="/order">Order</a>{" "}
                </li>
              </Link>
              <Link to="/orderlist">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faShoppingBasket} />{" "}
                  <a href="/orderlist">Order list</a>{" "}
                </li>
              </Link>
              <Link to="/review">
                <li>
                  <FontAwesomeIcon icon={faCommentAlt} /> <a href="/review"> Review</a>
                </li>
              </Link>
            </ul>
         
            
       
        </div>
      </div>
    </div>
  );
};

export default SideBar;
