import axios from 'axios';
import React, { createContext, ReactNode, useState } from 'react'

interface contextproviderprops{
   children:ReactNode
}
interface createcontextprops{
    val: dataapi,
    apifetch: (place:String)=>void
}
interface dataapi{
  location:string,
  temperature: number
}

export const Context = createContext<createcontextprops| null>(null);
const Creatcontext:React.FC<contextproviderprops>= ({children}) => {
    const [val,setValue] = useState<dataapi>({
        location:"",
        temperature:0
    });
    const apifetch =async(place:String)=>{
          try {
            let response = await axios(`http://api.weatherapi.com/v1/current.json?key=8c59aaa242f74af88ae150929253003&q=${place}&aqi=no`)
            let result = response.data
            setValue({location: result.location.name,temperature:result.current.temp_c})
          } catch (error) {
            console.log("error occurred")
          }
    }
  return (
    <Context.Provider value={{val,apifetch}}>
        {children}
    </Context.Provider>
  )
}

export default Creatcontext
