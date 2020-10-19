import React from "react";
import NavServices from "../ServicesList/NavServices/NavServices";
import SideBarServices from "../ServicesList/SidebarServices/SideBarServices";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useState } from "react";

const AddService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register } = useForm();
  const [serviceInfo, setServiceInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = e => {
    const newServiceInfo = {...serviceInfo}
    newServiceInfo[e.target.name] = e.target.value;
    setServiceInfo(newServiceInfo); 
    
  }

  const handleFileChange = e => {
    const newFile = e.target.files[0];
    setFile(newFile)
  }

  const handleSubmit = () => {
   const formData = new FormData()
  formData.append('file', file)
  formData.append('title', serviceInfo.title)
  formData.append('description', serviceInfo.description)

  fetch("http://localhost:5000/addService", {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    alert('New Service Added Successfully')
  })
  .catch(error => {
    console.error(error)
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
            <div className=" row">
              <form onSubmit={handleSubmit}>
               <div className=' col-md-6' >
               <label> Service Title</label>
                <br />
                <input
                  onBlur={handleBlur}
                  ref={register({ required: true })}
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                />
                <br />
                <label htmlFor="description"> Description</label> <br />
                <textarea
                  onBlur={handleBlur}
                  ref={register({ required: true })}
                  name="description"
                  id=""
                  cols="5"
                  rows="5"
                  placeholder="Enter Description"
                ></textarea>
               </div>
                <div className="d-flex col-md-6 justify-content-between">
                  <label htmlFor="icon">Icon</label> <br />
                  <input onChange={handleFileChange} type="file" name="" id="" />
                </div>
                <button className=" d-flex justify-content-end btn btn-success ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
