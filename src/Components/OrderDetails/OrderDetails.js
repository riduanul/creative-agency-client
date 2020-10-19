import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';

const OrderDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [serviceData, setServiceData] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5000/service?email=${loggedInUser.email}`)
        .then((res) => res.json())
        .then((data) => {
            setServiceData(data);
        });
    }, []);
    return (
        <div className='row'>
            {
                serviceData.map(service => <OrderList service={service}></OrderList>)
            }
        </div>
    );
};

export default OrderDetails;