import React from "react";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for a service .</p>
        <a href="/">Back to Home</a>
      </div>
    </Card>
  );
}

export default AboutPage;
