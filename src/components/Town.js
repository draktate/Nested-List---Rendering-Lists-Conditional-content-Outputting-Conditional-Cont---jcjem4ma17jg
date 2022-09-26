import React, { Component, useState,useEffect } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./../styles/App.css";

const refreshList=(item)=>{ 
  // console.log("cities:", states.filter(row=> row.name ==item.name)[0].cities);
  // let cities=states.filter((row)=>{  row.name==item.name});
   //console.log(cities);
  }

  
function Town( props) 
{

  const[display, setDisplay] = useState(false);
  const [dt, setDt]= useState(true);
  const [currCity, setCurrCity] = useState();

  useEffect(()=>{ setDt(!dt); },[props]  )  

//  const [displayCity, setDisplayCity]= useState(true);
  let towns = props.towns;
  
  let innerList=<div> nothing </div>

  if(props.seleCities.includes( props.city))
  {
    innerList=<div >
    <ul>
      {towns.map((item,index)=> <li key={"town"+parseInt(index+1)} onClick={(event)=>{event.stopPropagation();}} > 
      {item.name}
      
      </li> )} 
      </ul> </div>;
    
  }
  else
  {
    innerList=<></>;
    
  }

  return innerList;
}

export default Town;
