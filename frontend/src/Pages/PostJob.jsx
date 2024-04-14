// PostJobForm.js
import React, { useState } from 'react';
import './PostJob.css'; // Import the CSS file for styling

const PostJob = () => {
 const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    employmentType: '',
    deadline: '',
    industry: '',
    experienceLevel: '',
 });

 const handleChange = (e) => {
    setJobDetails({
      ...jobDetails,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job posting logic here
    console.log(jobDetails);
 };

 return (
    <div className="post-job-form">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Job Title:</label>
        <input type="text" id="title" name="title" value={jobDetails.title} onChange={handleChange} required />

        <label htmlFor="description">Job Description:</label>
        <textarea id="description" name="description" value={jobDetails.description} onChange={handleChange} required />

        <label htmlFor="requirements">Requirements:</label>
        <textarea id="requirements" name="requirements" value={jobDetails.requirements} onChange={handleChange} required />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={jobDetails.location} onChange={handleChange} required />

        <label htmlFor="salary">Salary:</label>
        <input type="text" id="salary" name="salary" value={jobDetails.salary} onChange={handleChange} required />

        <label htmlFor="employmentType">Employment Type:</label>
        <select id="employmentType" name="employmentType" value={jobDetails.employmentType} onChange={handleChange} required>
          <option value="">Select Employment Type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="temporary">Temporary</option>
        </select>

        <label htmlFor="deadline">Deadline:</label>
        <input type="date" id="deadline" name="deadline" value={jobDetails.deadline} onChange={handleChange} required />

        <label htmlFor="industry">Industry:</label>
        <input type="text" id="industry" name="industry" value={jobDetails.industry} onChange={handleChange} required />

        <label htmlFor="experienceLevel">Experience Level:</label>
        <select id="experienceLevel" name="experienceLevel" value={jobDetails.experienceLevel} onChange={handleChange} required>
          <option value="">Select Experience Level</option>
          <option value="entry-level">Entry-level</option>
          <option value="mid-level">Mid-level</option>
          <option value="senior-level">Senior-level</option>
        </select>

        <button type="submit">Post Job</button>
      </form>
    </div>
 );
};

export default PostJob;
