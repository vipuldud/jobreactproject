import React from 'react';
import JobList from './components/JobList';
import jobs from './utils/jobData';

function App() {
  return (
    <div className="App">
      <h1>Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
