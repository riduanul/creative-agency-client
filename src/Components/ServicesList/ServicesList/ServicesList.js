import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NavServices from '../NavServices/NavServices';
import SideBarServices from '../SidebarServices/SideBarServices';




const ServicesList = () => {
    const [orderList, setOrderList] = useState([])
    const bgStyles ={
        backgroundColor: 'white',
        width: '100%', 
        margin: '5px',
        padding:'5px'
        

    }

    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrderList(data)
        })
    }, [])
    return (
        <div>
            <NavServices></NavServices>
            <div className="container-fluid row">
                <div className="col-md-2 pl-0">
                    <SideBarServices></SideBarServices>
                </div> 
                <div className="col-md-9 ml-3 pl-3 pt-3 pr-3 style-bar ">
                   <div style={bgStyles} >
                   <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email Id</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Procject Detail</th>
                <th className="text-secondary" scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
                {
                  orderList.map((orders, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{orders.name}</td>
                        <td>{orders.email}</td>
                        <td>{orders.category}</td>
                        <td style={{width:'170px'}}>{orders.description}</td>
                        <select name="status" id="">
                            <option style={{color:'red'}} value={orders.status}>Pending</option>
                            <option style={{color:'yellow'}} value={orders.status}>On going</option>
                            <option style={{color:'green'}}value={orders.status}>Done</option>
                        </select>
                    </tr>
                    )
                }
            </tbody>
        </table>

                   </div>
                </div>
            </div>
          
            

        </div>
    );
};

export default ServicesList;