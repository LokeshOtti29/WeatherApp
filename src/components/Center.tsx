import React from 'react';

import Place from './Place';


const Center: React.FC = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow-lg">
        <h2 className="mb-3">Weather Finder</h2>
        <form className="d-flex justify-content-center">
          <input 
            type="text" 
            className="form-control w-50 me-2" 
            placeholder="Enter the city" 
          />
          <button type="submit" className="btn btn-outline-primary">Search</button>
        </form>
      </div>
      <div className="mt-4">
        <Place />
      </div>
    </div>
  );
};

export default Center;
