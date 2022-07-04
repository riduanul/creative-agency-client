import React from 'react'
import './Achivements.css'
import {AiFillExperiment} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'
import {ImManWoman} from 'react-icons/im'
import {MdApps} from 'react-icons/md'
import CountUp from 'react-countup';

const Achivements = () => {
  return (
   <div className="achivements container">
    <div className="achivement-card-container">
        <div className="achivement-card">
        <AiFillExperiment className='react-icon'/>
        <h1><CountUp end={6} duration={1} prefix='+'/></h1>
            
            <p>Years Of Experiences</p>
        </div>
        <div className="achivement-card">
            <FaUsers className='react-icon' />
            <h1><CountUp end={25} duration={2} suffix='k' decimal={2}/></h1>
            
            <p>Happy Users</p>
        </div>
        
        <div className="achivement-card">
        <ImManWoman className='react-icon'/>
        <h1><CountUp end={1000} duration={2} suffix='+' decimal={2}/></h1>
            
            <p>Clients</p>
        </div>
        <div className="achivement-card">
        <MdApps className='react-icon'/>
        <h1> <h1><CountUp end={25} duration={2} suffix='k+'/></h1></h1>
            
            <p>Product Already supplied</p>
        </div>
        
    </div>
   </div>
  )
}

export default Achivements