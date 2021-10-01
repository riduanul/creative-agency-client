import React from "react";

const FeedBacks = (props) => {
  const { img, name, designation, feedback } = props.feedback;
  return (
    <div className="col-md-4 mb-5">
      <div className="card shadow-sm">
        <div className=" card-body">
          <div className=" d-flex  align-items-center">
            <img className="mx-3" src={img} alt="" width="60" />
            <div>
              <h5 style={{ fontWeight: "bold" }}>{name}</h5>
              <p style={{ fontWeight: "bold" }} className="m-0">
                {designation}
              </p>
            </div>
          </div>
          <p className="card-text text-justify p-2">{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBacks;
