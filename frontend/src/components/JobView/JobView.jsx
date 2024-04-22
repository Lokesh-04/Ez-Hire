// JobView.js
import React from 'react';

const JobView = ({ job }) => {
 if (!job) {
    return <div>Select a job to view details.</div>;
 }

 return (
    <div className="job-view">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Deadline: {job.deadline}</p>
      {/* Add more job details as needed */}
    </div>
 );
};

export default JobView;
