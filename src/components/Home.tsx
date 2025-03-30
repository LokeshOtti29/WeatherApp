import React from 'react'

const Home:React.FC = () => {
  return (
    <div className="text-center mt-4 shadows-into-light-regular">
    <div className="fs-3 fw-bold">Weather Radar</div>
    <div className="mt-3">
      <button className="btn btn-primary btn-lg">Check Weather</button>
    </div>
  </div>
  )
}

export default Home
