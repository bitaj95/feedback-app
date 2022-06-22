import React from "react";

export default function FeedbackStats({ feedback }) {
  //Calculate rating averagee

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviews</h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
