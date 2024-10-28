import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search job titles"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
