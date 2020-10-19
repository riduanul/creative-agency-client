import React from "react";
import NavServices from "../ServicesList/NavServices/NavServices";
import SideBarServices from "../ServicesList/SidebarServices/SideBarServices";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../App";


const MakeAdmin = () => {
  const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit} = useForm();
    
    const onSubmit = data => {
        fetch('https://thawing-cliffs-32104.herokuapp.com/admin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            alert('New Admin Added successfully')
            console.log(result)
        })            
    }
  const bgStyles = {
    backgroundColor: "white",
    width: "100%",
    margin: "5px",
    padding: "5px",
  };
  return (
    <div>
      <NavServices></NavServices>
      <div className="container-fluid row">
        <div className="col-md-2 pl-0">
          <SideBarServices></SideBarServices>
        </div>
        <div className="col-md-9 ml-3 pl-3 pt-3 pr-3 style-bar ">
          <div style={bgStyles} className="p-4 ">
            <div className=" d-flex ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label> Email</label>
                <br />
                <input ref={register({ required: true })} name='email' type="text" placeholder="jon@gmail.com" />
                
                <button className="btn btn-success btn-lg p-2 mb-2" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
