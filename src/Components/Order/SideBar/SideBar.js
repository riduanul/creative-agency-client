import React, { useContext, useEffect, useState } from "react";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBasket,
  faCommentAlt,
  faPlus,
  faUserPlus,
  faSignOutAlt
  
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";

const SideBar = () => {
  const [loggedInUser] = useContext(UserContext);

  const [isadmin, setIsAdmin] = useState(false);

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
    <div className="sidebar">
      <div className="sideBar-style mt-3 ">
        <div className="bar-img">
          <Link to="/">
            <img src={logo} alt="logo" width="150" />
          </Link>
        </div>
    <div className=" sidebar-li mt-5">
      
      <ul >
            <li>
              <Link to="/serviceslist" >
               
                  <FontAwesomeIcon icon={faShoppingBasket} />{" "}
                  Services list
                
              </Link>
              </li>
              <li>
              <Link to="/addservice">
                
                  <FontAwesomeIcon icon={faPlus} /> Add Service                
              </Link>
              </li>
              <li>
              <Link to="/makeadmin">
                
                  <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                
              </Link>
              </li>

              <li>
              <Link to="/order">
                
                  <FontAwesomeIcon icon={faShoppingCart} />Order
               
              </Link>
              </li>
              
              <li>
              <Link to="/orderlist">
            
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  Order list
                
              </Link>
              </li>

              <li>
              <Link to="/review">
              
                  <FontAwesomeIcon icon={faCommentAlt} /> Review
                
              </Link>
              </li>

              <li style={{color:'red'}}>
              <Link to="/" >
               
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                
              </Link>
              </li>
            </ul>
         
            
       
        </div>
      </div>
    </div>
  );
};

export default SideBar;
