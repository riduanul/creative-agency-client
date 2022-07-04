import React from 'react';
import './Footer.css'
import logo from "../../../images/logos/logo.png";

const Footer = () => {
    return (
        <div  className="footer">
            <div className='footer-items'>
                    <div className="item1">
                        <img src={logo} alt="" width="200"/>
                       <h4 className='mt-4'>Creative Agency</h4>
                       <p>Your Best Choice for application Development</p>
                    </div>
                    <div className="item1">
                        <ul>
                            <li><h6>We are free to contact</h6></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="item1">
                        <ul>
                        <li><h6>Categories</h6></li>
                            <li>Web Development</li>
                            <li>Mobile application</li>
                            <li>item4</li>
                        </ul>
                    </div>
                    <div className="item1">
                        <ul>
                        <li><h6>We are free to contact</h6></li>
                            <li><a href="#">creativeAgency@gmail.com</a></li>
                            <li>Phone: 01788888888</li>
                            <li> main Street, Banani, Dhaka-1200</li>
                        </ul>
                    </div>
            </div>
     
            <div className='text-center mt-5'>  Copyrights {(new Date().getFullYear())} All rights reserved</div>
    
        </div>   

    );
};

export default Footer;