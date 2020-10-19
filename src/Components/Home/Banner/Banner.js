import React from 'react';
import banner from '../../../images/logos/Frame.png';


const Banner = () => {
    return (
        <div className='container mt-5 '>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12 pl-4 mt-5 pt-5 pr-0 mr-0">
                    <h1><b>Let's Grow Your <br/> Brand To The <br/>Next Level</b></h1>
                    <p><small>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Atque quibusdam, exercitationem numquam <br/> optio neque ut.</small></p>
                    <button className='btn btn-dark pl-5 pr-5 '>Hire Us</button>
                </div>
                <div className=" col-md-7 col-sm-6 col-12  ml-0 pl-0 ">
                    <div className="col-md6 col-12">
                    <img className='img-fluid' src={banner} alt="" width="560" />
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;