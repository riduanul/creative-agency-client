import React from 'react';
import './SideBarServices.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket,  faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SideBarServices = () => {
    return (
        <div className="container">
            <div className="sideBar-style mt-3 " >
            
            <ul> 
                
            <Link to='/serviceslist'><li><FontAwesomeIcon icon={faShoppingBasket} />  <span>Services list</span> </li></Link>
           <Link to='/addservice'><li> <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> </li></Link>
            <Link to='/makeadmin'><li><FontAwesomeIcon icon={faUserPlus} />  <span>Make Admin</span></li></Link>
            
                
            </ul>
            
        </div>
        </div>
    );
};

export default SideBarServices;