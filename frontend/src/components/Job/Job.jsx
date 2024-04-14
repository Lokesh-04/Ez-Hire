// Job.js
import React from 'react';
import "./Job.css";

const Job = ({ job }) => {
 return (
    <div className="job">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>Deadline: {job.deadline}</p>
      {/* Add more job details as needed */}
    </div>
 );
};

export default Job;
