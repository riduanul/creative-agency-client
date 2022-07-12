import React from 'react'
import './WhoWeAre.css'
import aboutImg from '../../../images/about-img.png';

const WhoWeAre = () => {
  return (
   <div className="about-container mt-5 container">
      <div className="about-img">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-content">
        <h2 style={{textAlign:'center', fontWeight:'700'}}>Who <span style={{color:'green', }}>we are</span> </h2>
        
        <p style={{marginTop:'25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magnam soluta necessitatibus eligendi qui eius explicabo facilis nostrum quas voluptatibus, ipsa placeat. Quae, magni dolore.</p>
        <p style={{marginTop:'25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae magnam soluta necessitatibus elig.</p>
        <p style={{marginTop:'25px'}}>Lorem ipsum dolor sit, amet qui eius explicabo facilis nostrum quas voluptatibus, ipsa placeat. Quae, magni dolore.</p>

        <a href="/home">See More</a>
      </div>
   </div>
  )
}

export default WhoWeAre