import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import SideBar from "../Order/SideBar/SideBar";

const OrderList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch(
      `https://thawing-cliffs-32104.herokuapp.com/service?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid row">
        <div className="col-md-2 col-sm-4 col-12 pl-0">
          <SideBar></SideBar>
        </div>

        <div className="col-md-9 col-sm-6 col-12 ">
          <div className="serviceslist-header">
            <div>
              <h4>Order List</h4>
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
          <div className="  justify-content-between admin-main mt-3">
            <div className=" row d-flex text-center pt-2">
              {orderData.map((order) => (
                <div className="col-md-4 m-3">
                  <div className=" p-3">
                    <img
                      style={{ width: "80px" }}
                      alt="img"
                      src={`data:image/png;base64,${order.image.img}`}
                    />
                  </div>
                  <h6>{order.category}</h6>
                  <p className="text-justify">
                    <small>{order.description}</small>
                  </p>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
