import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  return (
    <div id="sidebar">
      <div id="profile">
        <div id="username">username</div>
        <div id="profile-pic">
          <img src="/vite.svg" alt="profile" />
        </div>
      </div>
      <div id="post-a-job">
        <Link to="/post-job" className="button">
          + Post a Job
        </Link>
      </div>

      <div id="notifications">{/* display the notification here */}</div>
    </div>
  );
}

export default SideBar;
