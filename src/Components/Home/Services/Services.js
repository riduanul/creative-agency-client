import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'


const Services = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [loading, setLoading] = useState(true)
      const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://thawing-cliffs-32104.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
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
       <div className="container services-row ">
           <h3 style={{fontWeight: 'bold'}}className="text-center"> Provide awesome <span style={{color:"green"}}>services</span></h3>
           <h6 style={{color:'gray'}}>Just Click and Order</h6>
            <div> 
          
            </div>
            <div className="row my-5 service-row">
                    
                {
                   loading ? <div className='loading'>Loading...</div> : services.map(service => <ServiceDetails   key= {service.title} handleService={handleService} service={service}></ServiceDetails>) 
                }
            </div>
       </div>
    );
};

export default Services;