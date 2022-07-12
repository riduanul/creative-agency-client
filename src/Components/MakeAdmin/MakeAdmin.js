import React from "react";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./MakeAdmin.css";
import SideBar from "../Order/SideBar/SideBar";

const MakeAdmin = () => {
  const [loggedInUser] = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://thawing-cliffs-32104.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("New Admin Added successfully");
        console.log(result);
      });
  };

  return (
    <div>
      <div className=" row">
        <div className="col-md-2 ">
          <SideBar />
        </div>
        <div className="col-md-8 ">
          <div className="admin-header">
            <div>
              <h5>Make Admin</h5>
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

          <div className="  admin-main mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label> Email</label>
              <br />
              <input
                ref={register({ required: true })}
                name="email"
                type="text"
                placeholder="jon@gmail.com"
              />

              <button className="btn btn-success btn-lg p-2 mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
