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
          {isAdmin ? (
            <ul className="mt-5">
              <Link to="/serviceslist">
                <li>
                  <FontAwesomeIcon icon={faShoppingBasket} />{" "}
                  <span>Services list</span>{" "}
                </li>
              </Link>
              <Link to="/addservice">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>{" "}
                </li>
              </Link>
              <Link to="/makeadmin">
                <li>
                  <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </li>
              </Link>

              <Link to="/order">
                <li>
                  <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>{" "}
                </li>
              </Link>
              <Link to="/orderlist">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faShoppingBasket} />{" "}
                  <span>Order list</span>{" "}
                </li>
              </Link>
              <Link to="/review">
                <li>
                  <FontAwesomeIcon icon={faCommentAlt} /> <span> Review</span>
                </li>
              </Link>
            </ul>
          ) : (
            <div className="mt-5">
              <ul>
                <Link to="/order">
                  <li>
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>{" "}
                  </li>
                </Link>
                <Link to="/orderlist">
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faShoppingBasket} />{" "}
                    <span>Order list</span>{" "}
                  </li>
                </Link>
                <Link to="/review">
                  <li>
                    <FontAwesomeIcon icon={faCommentAlt} /> <span> Review</span>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
