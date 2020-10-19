import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor:'#FBD062', width:'100%', height:'700px',}}>
        <div className="container ">
        <div className="row pb-5 mb-5 mt-5 pt-5">
                <div className="col-md-5">
                    <h3><b>Let us handle your <br/> project, professionally</b></h3> <br/>
                    <p> <small> Lorem ipsum dolor sit, amet consectetur  elit. Eligendi ullam ipsum accusamus alias aperiam mollitia!</small></p>
                </div>
                <div className="col-md-7 style-input ">
                    <div >
                        <input  type="text" placeholder="Your email address"/> <br/>
                        <input type="text" placeholder="Your name/company's name"/><br/>
                        <textarea style={{width:'100%',margin:'10px'}} name="Your message" placeholder='Your Message' id="" cols="20" rows="13"></textarea>
                        <button className='btn btn-dark ml-2'>Send</button>
                    </div>

                </div>
            </div>
            <div className='text-center mt-5'> Copyrights {(new Date().getFullYear())} All rights reserved</div>
    
        </div>   
        </div>
    );
};

export default Footer;