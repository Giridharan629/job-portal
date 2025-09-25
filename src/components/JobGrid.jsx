import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import './JobGrid.css';

const JobGrid = ({ jobData, locationFilter }) => {

  const filteredJobs = jobData?.filter((job) => {
    console.log(job)
    if (locationFilter === "") return true; // show all if no filter selected
    return job.location === locationFilter;
  });

  return (
    <section className="job-grid-section">
      <div className="container">
        <div className="job-grid">
          {filteredJobs?.length > 0 ? (
            filteredJobs?.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p>No jobs found for {locationFilter}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobGrid;