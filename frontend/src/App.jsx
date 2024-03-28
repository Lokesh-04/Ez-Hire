import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from "./Auth";
import Jobsearch from "./Pages/Jobsearch";
import Hire from "./Pages/Hire";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/jobsearch" element={<Jobsearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
