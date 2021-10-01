import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import SideBar from "../SideBar/SideBar";
import "./Order.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register } = useForm();

  const [orderInfo, setOrderInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newOrderInfo = { ...orderInfo };
    newOrderInfo[e.target.name] = e.target.value;
    setOrderInfo(newOrderInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  console.log(loggedInUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", loggedInUser.name);
    formData.append("email", loggedInUser.email);
    formData.append("price", orderInfo.price);
    formData.append("category", loggedInUser.service.title);
    formData.append("description", loggedInUser.service.description);

    fetch("https://thawing-cliffs-32104.herokuapp.com/addOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("New Service Added Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-fluid row">
      <div className="col-md-2 pl-0">
        <SideBar></SideBar>
      </div>
      <div className="col-md-9">
        <div className="order-header">
          <div>
            <h4>Order</h4>
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

        <div className="order-main mt-3">
          <form onSubmit={handleSubmit}>
            <input
              type=" text"
              onBlur={handleBlur}
              ref={register({ required: true })}
              name="name"
              placeholder="Your name/ company's name"
              defaultValue={loggedInUser.name}
            />
            <br />
            <input
              type=" text"
              onBlur={handleBlur}
              ref={register({ required: true })}
              name="email"
              placeholder="Your email address"
              defaultValue={loggedInUser.email}
            />
            <br />
            <input
              onBlur={handleBlur}
              type=" text"
              ref={register({ required: true })}
              name="category"
              placeholder="Your category"
            />
            <br />
            <textarea
              name="description"
              onBlur={handleBlur}
              ref={register({ required: true })}
              id=""
              cols="30"
              rows="5"
              placeholder="Project Details"
            ></textarea>
            <br />
            <input
              onBlur={handleBlur}
              ref={register({ required: true })}
              style={{ width: "200px" }}
              type="number"
              name="price"
              id=""
              placeholder="Price"
            />
            <input onChange={handleFileChange} type="file" name="file" id="" />
            <br />
            <button type="submit" className="btn btn-dark mt-2 ml-1">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
