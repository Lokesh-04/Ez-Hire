import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from "./Auth";
import Jobsearch from "./Pages/Jobsearch.jsx";
import Hire from "./Pages/Hire.jsx";
import PostJob from "./Pages/PostJob.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/jobsearch" element={<Jobsearch />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
