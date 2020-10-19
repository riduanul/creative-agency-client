import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './NavServices.css';

const NavServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);    
    return (
        <div className=" container row nav-style my-2">
            <div className=" pl-5 ml-2d-flex justify-content-between">
                <Link to="/"><img src={logo} alt="logo" width='150'/></Link>
            </div>
            <div className ='ml-5 pl-5 mt-3'>
                <h5><b>Services List</b></h5>
                <h6>{loggedInUser.displayName}</h6>
            </div>

        </div>
    );
};

export default NavServices;