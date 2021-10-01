import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
import "./ServicesList.css";
import SideBar from "../../Order/SideBar/SideBar";

const ServicesList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [orderList, setOrderList] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetch("https://thawing-cliffs-32104.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  }, []);

  const handlestatus = (e) => {
    const status = e.target.value;
    status[e.target.name] = e.target.value;
    setStatus(status);
  };
  return (
    <div className="container-fluid row">
      <div className="col-md-2 pl-0">
        <SideBar />
      </div>
      <div className="col-md-9 ">
        <div className="serviceslist-header">
          <div>
            <h4>Services List</h4>
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
        <div className="serviceslist-main mt-3">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Email Id
                </th>
                <th className="text-secondary" scope="col">
                  Service
                </th>
                <th className="text-secondary" scope="col">
                  Procject Detail
                </th>
                <th className="text-secondary" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((orders, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{orders.name}</td>
                  <td>{orders.email}</td>
                  <td>{orders.category}</td>
                  <td style={{ width: "170px" }}>{orders.description}</td>
                  <select name="status" id="">
                    <option
                      onChange={handlestatus}
                      style={{ color: "red" }}
                      value={orders.status}
                    >
                      Pending
                    </option>
                    <option
                      onChange={handlestatus}
                      style={{ color: "yellow" }}
                      value={orders.status}
                    >
                      On going
                    </option>
                    <option
                      onChange={handlestatus}
                      style={{ color: "green" }}
                      value={orders.status}
                    >
                      Done
                    </option>
                  </select>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
