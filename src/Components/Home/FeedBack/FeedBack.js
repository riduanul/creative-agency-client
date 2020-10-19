import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';
import FeedBacks from '../FeedBacks/FeedBacks';


const feedbacks =[
    {
        img: client1,
        name: 'Nash Patrik',
        designation: 'CEO, Manpol',
        feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sit magni iste, assumenda sint saepe?'

    },
    {
        img: client2,
        name: 'Miriam Barron',
        designation: 'CEO, Manpol',
        feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sit magni iste, assumenda sint saepe?'

    },
    {
        img: client3,
        name: 'Bria Malone',
        designation: 'CEO, Manpol',
        feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sit magni iste, assumenda sint saepe?'

    }
]
const FeedBack = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviewData, setReviewData] = useState([]);

    const handleFeedback = () => {
        fetch('https://thawing-cliffs-32104.herokuapp.com/addReviewsData',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(feedbacks)
        
    })
    .then(response => response.json())
    .then(data => {
        alert("posted successfully")
        console.log(data)
    });    
    }

    useEffect(() => {
       fetch("https://thawing-cliffs-32104.herokuapp.com/reviews")
        .then(res => res.json())
        .then (data => {
            console.log(data)
            setReviewData(data)
        })
        
    },[])

    return (
        <section className='container my-5 py-5'>
            
            <h3 className='text-center'><b>Clients <span style={{color:'green',}}> Feedback</span></b></h3>
            <div className=' row card-deck py-5'>
            {
                reviewData.map(feedback => <FeedBacks  key={feedback.name}feedback={ feedback}></FeedBacks>)
            }
            </div>
            
        </section>
    );
};

export default FeedBack;