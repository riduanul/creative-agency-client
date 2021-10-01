import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logos/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link to="./">
          <img src={logo} alt="" width="140" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarSupportedContent"
        >
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Team
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            {loggedInUser.email ? (
              <button className="btn btn-dark my-2 my-sm-0" type="submit">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-dark my-2 my-sm-0" type="submit">
                  Login
                </button>
              </Link>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
