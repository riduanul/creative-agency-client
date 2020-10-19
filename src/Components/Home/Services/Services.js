import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'


const Services = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
      const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://thawing-cliffs-32104.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
        
    },[]);
    
    const history = useHistory();

  
    const handleService = (service) => {
        const newServices = {...loggedInUser}
        newServices.service= service;
        setLoggedInUser(newServices)
        history.push('/orderList');
    }
     
  

    return (
       <div className="container my-5 py-5">
           <h3 style={{fontWeight: 'bold'}}className="text-center"> Provide awesome <span style={{color:"green"}}>services</span></h3>
            <div className="row my-5 ">
                {
                    services.map(service => <ServiceDetails   key= {service.title} handleService={handleService} service={service}></ServiceDetails>)
                }
            </div>
       </div>
    );
};

export default Services;