import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Auth() {
  return (
    <div>
      <div className="Auth-body">
      <h1>Choose what you are for here?</h1>
      <div id="links">
          <Link to="/hire" className="nav-item">
            <button>Hire</button>
          </Link>
          <Link to="/jobsearch" className="nav-item">
            <button>Job Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
