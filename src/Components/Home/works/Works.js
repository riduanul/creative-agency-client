import React from 'react';
import Item from './Item';
import Carousel from 'react-elastic-carousel';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'



const breakPoints = [
{width:1, itemsToShow:1},
{width:550, itemsToShow:2},
{width:768, itemsToShow:3},
{width:1200, itemsToShow:4}
]
    


const Works = () => {
    return (
        <div  style={{ backgroundColor:'#111430', width:'100%', height:'550px' }} className=" p-5 pb-5">
          <h3 className="text-white text-center p-5"><b>Here are some of <span style={{color:"green"}}>our works</span></b></h3> 
          <Carousel breakPoints={breakPoints}>
              <Item> <img src={carousel1} alt="" width='350'/></Item>
              <Item> <img src={carousel2} alt=""width='350'/></Item>
              <Item> <img src={carousel3} alt=""width='300' height='250'/></Item>
              <Item> <img src={carousel4} alt=""width='350'/></Item>
              <Item> <img src={carousel5} alt=""width='350'/></Item>
          </Carousel> 
        </div>
    );
};

export default Works;