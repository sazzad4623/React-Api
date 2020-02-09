import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>This is about page</h1>
      <ol style={{ listStyleType: "none" }}>
        <li>Home</li>
        <Link to="/">
          <li>
            <h1 style={{ color: "red" }}>Main</h1>
          </li>
        </Link>
      </ol>
    </div>
  );
}

export default About;
