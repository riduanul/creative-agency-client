import React from 'react';
import NavExtra from '../Order/NavExtra/NavExtra';
import SideBar from '../Order/SideBar/SideBar';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../App';

const Review = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            alert('Thanks For Your Review')
            console.log(result)
        })            
    }
    return (
        <div>
        <NavExtra></NavExtra>
        <div className="container-fluid row">
            <div className="col-md-2 pl-0">
                <SideBar></SideBar>
            </div> 
            <div className="col-md-9 ml-5 pl-5 pt-5 pr-0 style-bar ">
            <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <input type=" text" ref={register({ required: true })} name='name' placeholder="Your name"/> <br/>
                        <input type=" text" ref={register({ required: true })} name='designation' placeholder="Company's name, Designation"/> <br/>
                        <textarea ref={register({ required: true })} name='feedback' id="" cols="30" rows="5" placeholder="Description"></textarea>
                        <br/>
                        <button className="btn btn-dark mt-2 ml-1">Submit</button>
                   </form>
            </div>
        </div>
    </div>
    );
};

export default Review;