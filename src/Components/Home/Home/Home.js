import React from 'react';
import Header from '../Header/Header';
import Client from '../Client/Client';
import Services from '../Services/Services';
import Works from '../works/Works';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Achivements from '../Achivements/Achivements';





const Home = () => {
    return (
        <div >
         <Header />
         <Client></Client>
         <WhoWeAre/>
         <Services />
         <Achivements/>
         <Works />
         <FeedBack />
         <Contact/>
         <Footer />
         
        </div>
        
    );
};

export default Home;