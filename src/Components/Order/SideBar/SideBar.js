import React, { useContext, useEffect, useState } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBasket, faCommentAlt,faPlus,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false)

 useEffect(() => {
    fetch('http://localhost:5000/isAdmin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsAdmin(data))
 },[])

 
     return (
        <div className="container">
            <div className="sideBar-style mt-3 " >
            
            <ul> 
                { isAdmin ? <div>
                    <Link to='/serviceslist'><li><FontAwesomeIcon icon={faShoppingBasket} />  <span>Services list</span> </li></Link>
                    <Link to='/addservice'><li> <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> </li></Link>
                    <Link to='/makeadmin'><li><FontAwesomeIcon icon={faUserPlus} />  <span>Make Admin</span></li></Link>
                </div> :
                <div>
                     <Link  to='/order'><li><FontAwesomeIcon icon={faShoppingCart} />  <span>Order</span> </li></Link>
                <Link to='/orderlist'><li> <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service list</span> </li></Link>
                <Link to='/review'><li><FontAwesomeIcon icon={faCommentAlt} />  <span> Review</span></li></Link>
                </div>
                }
                
            </ul>
            
        </div>
        </div>
    );
};

export default SideBar;