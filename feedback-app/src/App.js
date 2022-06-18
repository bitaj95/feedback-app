import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text="hello work" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
