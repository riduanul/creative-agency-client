import React from "react";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useState } from "react";
import "./AddService.css";
import uploadImage from "../../images/upload.png";
import SideBar from "../Order/SideBar/SideBar";

const AddService = () => {
  const [loggedInUser] = useContext(UserContext);

  const { register } = useForm();
  const [serviceInfo, setServiceInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newServiceInfo = { ...serviceInfo };
    newServiceInfo[e.target.name] = e.target.value;
    setServiceInfo(newServiceInfo);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", serviceInfo.title);
    formData.append("description", serviceInfo.description);

    fetch("https://thawing-cliffs-32104.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("New Service Added Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="container-fluid row">
        <div className="col-md-2 pl-0">
          <SideBar />
        </div>
        <div className="col-md-9 ">
          <div className="addservice-header">
            <div>
              <h4>Add Servicess</h4>
            </div>
            <div>
              {loggedInUser && (
                <div className="d-flex align-items-center ml-2">
                  <img
                    style={{ width: "50px", borderRadius: "50%" }}
                    src={loggedInUser.img}
                    alt=""
                  />{" "}
                  <h6>{loggedInUser.name}</h6>
                </div>
              )}
            </div>
          </div>
          <div className="addservice mt-3">
            <form onSubmit={handleSubmit}>
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
                rows="3"
                placeholder="Enter Description"
              ></textarea>
              <div className="image-upload upload-btn">
                <label>
                  <img src={uploadImage} alt="" width="30" />
                  <small> Upload image</small>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    name="file"
                    id="file-input"
                    multiple
                    onChange={(e) =>
                      setFile({ ...file, image: e.target.files[0] })
                    }
                  />
                </label>
              </div>
              <button className=" d-flex justify-content-end btn btn-success sub-btn ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
