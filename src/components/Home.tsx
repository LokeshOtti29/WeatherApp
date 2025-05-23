import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home:React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="text-center mt-4 shadows-into-light-regular">
    <div className="fs-3 fw-bold">Weather Radar</div>
    <div className="mt-3">
      <button className="btn btn-primary btn-lg" onClick={()=>navigate("/center")}>Check Weather</button>
    </div>
  </div>
  )
}

export default Home
