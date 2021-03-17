import React from 'react'

const Filter = ({ setFilterName }) => {
  return (
    <div>
      filter shown with
      <input onChange={(e) => setFilterName(e.target.value)} />
    </div>
  );
};

export default Filter