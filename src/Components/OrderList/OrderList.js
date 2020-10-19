import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import NavExtra from "../Order/NavExtra/NavExtra";
import SideBar from "../Order/SideBar/SideBar";
import OrderDetails from "../OrderDetails/OrderDetails";

const OrderList = ({ serviceInfo }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch(`https://thawing-cliffs-32104.herokuapp.com/service?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setOrderData(data);
      });
  }, []);
  console.log(orderData);
  return (
    <div>
      <NavExtra></NavExtra>
      <div className="container-fluid row">
        <div className="col-md-2 col-sm-4 col-12 pl-0">
          <SideBar></SideBar>
        </div>

        <div className="col-md-9 col-sm-6 col-12 ml-5 pl-5 pt-5 pr-0 ">
          <div className=" justify-content-between">
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
