import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
        <div className='contact-bg'>
            
        <div className="contact-heading">
            <h1>Contact <span style={{color:'green'}}>Us</span></h1>
            <h3>Let us handle your project professionally</h3>
           
        </div>
        <div className='contact-container'>
            <div className="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0411937280332!2d90.39788054956834!3d23.781547393429097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c769c6633a2f%3A0xbb3979a7e02a8c90!2sBrain%20Station%2023!5e0!3m2!1sen!2sbd!4v1656835978453!5m2!1sen!2sbd" title='i' style={{width:"100%", height:"100%", border:"none", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
            </div>
            <div className="contact-content">
                    <form>
                        <div className="input-items">
                           
                           <label htmlFor="name">Name</label> 
                            <input type="text" name="name" id="name" />
                           
                           
                           <label htmlFor="email">Email</label>    
                            <input type="email" name="email" id="email" /> 
                            
                        </div>
                        <div className="text-area">
                        <label htmlFor="message">Message</label>    
                            <textarea name="message" id="message" style={{width:"100%", maxWidth:'100%', height:'250px'}}>

                            </textarea>
                        </div>
                        <div className="contact-btn">
                        <button className='creative-btn1'>Send</button>
                        </div>
                    </form>
            </div>
                </div>
        </div>
  )
}

export default Contact