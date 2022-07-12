import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import './clients.css'
const Client = () => {
    return (
        <div className=" clients">
            <h3 style={{ marginTop:"25px", fontWeight:"700"}}>Our <span style={{color:'green'}}>Clients</span></h3>
            <div className="row d-flex  pl-5 mt-5 justify-content-around align-items-center">
               
               <div className="col-md-2">
                    <img src={slack} alt="" width="150"/>
                </div>
                <div className="col-md-2">
                    <img src={google} alt="" width="150"/>
                </div>
                <div className="col-md-2">
                    <img src={uber} alt="" width="150"/>
                </div>
                <div className="col-md-2">
                    <img src={netflix} alt="" width="150"/>
                </div>
                <div className="col-md-2">
                    <img src={airbnb} alt="" width="150"/>
                </div>
               
            </div>
        </div>
    );
};

export default Client;