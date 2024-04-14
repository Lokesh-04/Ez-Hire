import React, { useState, useEffect } from "react";
import Job from "../Job/Job";
import axios from "axios";
import "./Jobs.css";
function Jobs() {
  const backendURL = "http://localhost:3000/hire";

  // State to hold the selected status
  const [selectedStatus, setSelectedStatus] = useState("");

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(backendURL);
        setJobs(response.data.jobs);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Function to handle status change
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  // Filter jobs based on the selected status
  const filteredJobs = jobs.filter(
    (job) => !selectedStatus || job.status === selectedStatus
  );

  return (
    <div>
      <div id="labels">
        <label htmlFor="statusFilter">Filter jobs by status:</label>
        <select
          id="statusFilter"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="ongoing">Ongoing</option>
          <option value="archive">Archive</option>
        </select>
      </div>

      {/* Render jobs here */}
      {filteredJobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
