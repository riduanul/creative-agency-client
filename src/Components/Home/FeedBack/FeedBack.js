import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FeedBacks from "../FeedBacks/FeedBacks";

const FeedBack = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("https://thawing-cliffs-32104.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviewData(data);
      });
  }, []);

  return (
    <section className="container my-5 py-5">
      <h3 className="text-center">
        <b>
          Clients <span style={{ color: "green" }}> Feedback</span>
        </b>
      </h3>
      <div className=" row card-deck py-5">
        {reviewData.map((feedback) => (
          <FeedBacks key={feedback.name} feedback={feedback}></FeedBacks>
        ))}
      </div>
    </section>
  );
};

export default FeedBack;
