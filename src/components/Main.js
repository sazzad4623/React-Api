import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Welcome to Main Page</h1>
      <ol style={{ listStyleType: "none" }}>
        <li>Home</li>
        <Link to="/Posts">
          <li>
            <a style={{ color: "red" }}>Posts</a>
          </li>
        </Link>
      </ol>
    </div>
  );
}

export default Main;
