import React, { useContext } from 'react'
import { Context } from '../Contextapi/Creatcontext'

const Place: React.FC = () => {
   const { val } = useContext(Context)!;

  return (
    <div className="container mt-4">
      {val.temperature!==null ? (  // Fix: Show weather when location is defined
        <div className="card shadow-lg p-4 text-center">
          <h3 className="card-title">{val.location}</h3>
          <p className="fs-2">{val.temperature}°C</p>
        </div>
      ) : (
        <div className="alert alert-info text-center">
          Enter a city and click search to get the weather.
        </div>
      )}
    </div>
  );
};

export default Place;
