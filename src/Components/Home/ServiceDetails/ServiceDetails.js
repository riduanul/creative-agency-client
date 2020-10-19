import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const {image, title, description} =props.service;
    
  
    const handleService = props.handleService;
    return (
        <div onClick={() => handleService (props.service)} className=" col-md-4  justify-content-between">
            <div className="box-design text-center pt-2 ">
                <div className="p-3">
                     <img style={{width:'80px'}} alt='img' src={`data:image/png;base64,${image.img}`} />
                </div>
                <h6>{title}</h6>
                <p><small>{description}</small></p>

            </div>
        </div>
    );
};

export default ServiceDetails;