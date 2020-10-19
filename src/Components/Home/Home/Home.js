import React from 'react';
import Header from '../Header/Header';
import Client from '../Client/Client';
import Services from '../Services/Services';
import Works from '../works/Works';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';





const Home = () => {
    return (
        <div >
         <Header />
         <Client></Client>
         <Services />
         <Works />
         <FeedBack />
         <Footer />
         
        </div>
        
    );
};

export default Home;