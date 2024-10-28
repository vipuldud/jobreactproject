import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import Filter from './Filter';
import Search from './Search';

const JobList = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let updatedJobs = jobs;

    if (filter) {
      updatedJobs = updatedJobs.filter(job => job.type === filter);
    }
    if (search) {
      updatedJobs = updatedJobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredJobs(updatedJobs);
  }, [filter, search, jobs]);

  return (
    <div>
      <Search setSearch={setSearch} />
      <Filter setFilter={setFilter} />
      <div className="job-list">
        {filteredJobs.length ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs match the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
