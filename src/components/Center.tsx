import React, {  useContext, useState } from 'react';


import {  useNavigate } from 'react-router-dom';
import { Context } from '../Contextapi/Creatcontext';
import Place from './Place';



const Center: React.FC = () => {
    const {apifetch} = useContext(Context)!;
    const navigate = useNavigate();
    const [place,setPlace] = useState<string>("");
    const onchange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPlace(e.target.value);
    }
    const handlesubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!place.trim()){
            navigate("/center")
        }else{
            navigate(`/center/${place}`,{state:{place}})
            apifetch(place);
        }
      
    }
  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow-lg">
        <h2 className="mb-3">Weather Finder</h2>
        <form className="d-flex justify-content-center" onSubmit={handlesubmit}>
          <input 
            type="text" 
            className="form-control w-50 me-2" 
            placeholder="Enter the city" 
            value={place}
            onChange={onchange}
          />
          <button type="submit" className="btn btn-outline-primary">Search</button>
        </form>
      </div>
      <div className="mt-4">
        <Place/>
      </div>
    </div>
  );
};

export default Center;
