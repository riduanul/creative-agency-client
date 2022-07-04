import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";
import "./NavBar.css";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";



const NavBar = () => {
  const [loggedInUser ] = useContext(UserContext);

  const [toggle, setToggle] = useState(false)

 
  return (
    <nav className="nav-bar container">
        <figure>
          <img src={logo} alt="" width='150' />
        </figure>
       <FaBars className='bar-icon' onClick={()=> setToggle(!toggle)} style={{fontSize:'170%',}} />
        <div className="nav-item ">
          <ul className={toggle ? 'show' : 'hide'}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About Us</a></li>
           { loggedInUser.email ? <li><button className="creative-btn1" >Logout</button></li>
           :
           <Link to='/login' ><li><button className="creative-btn1">Login</button></li></Link> 
            }
          </ul>
          
          
        </div>
    </nav>
  );
};

export default NavBar;
