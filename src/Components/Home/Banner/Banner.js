import React from 'react';
import banner from '../../../images/logos/Frame.png';
import './banner.css'



const Banner = () => {
    return (
        <div className='container mt-5 '>
            <div className="banner-container">
                <div className=" banner-content">
                    <h1><b>Let's Grow Your <br/> Brand To The <br/>Next Level</b></h1>
                    <p><small>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Atque quibusdam, exercitationem numquam <br/> optio neque ut.</small></p>
                    <button className='creative-btn1 '>Hire Us</button>
                </div>
                <div className="banner-img ">
                
                    <img src={banner} alt="banner-img"  />
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;