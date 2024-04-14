import React from "react";
import Jobs from "../components/Jobs/Jobs";
import Job from "../components/Job/Job";
import SideBar from "../components/SideBar/SideBar";
import "./Hire.css";

function Hire() {
  return (
    <div>
      <div id="main">
        <Jobs />
        <SideBar />
      </div>
    </div>
  );
}

export default Hire;