import React from "react";
import SideBar from "../Order/SideBar/SideBar";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../App";
import './review.css';

const Review = () => {
  const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://thawing-cliffs-32104.herokuapp.com/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Thanks For Your Review");
        console.log(result);
      });
  };
  return (
    <div className="container-fluid row">
      <div className="col-md-2 pl-0">
        <SideBar></SideBar>
      </div>
      <div className="col-md-9 ">
        <div className="serviceslist-header">
          <div>
            <h4>Review</h4>
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
        <div className="admin-main mt-3 review-section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type=" text"
              ref={register({ required: true })}
              name="name"
              placeholder="Your name"
            />{" "}
            <br />
            <input
              type=" text"
              ref={register({ required: true })}
              name="designation"
              placeholder="Company's name, Designation"
            />{" "}
            <br />
            <textarea
              ref={register({ required: true })}
              name="feedback"
              id=""
              cols="30"
              rows="5"
              placeholder="Description"
            ></textarea>
            <br />
            <button className="btn btn-success mt-2 ml-1">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
