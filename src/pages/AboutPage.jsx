import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for a service .</p>
        <Link to="/">Back to Home </Link>{" "}
      </div>
    </Card>
  );
}

export default AboutPage;
