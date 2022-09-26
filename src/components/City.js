import React, { Component, useEffect, useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./../styles/App.css";
import Town from "./Town";

let displayCity=true;



function City( props) 
{
  const[display, setDisplay] = useState(false);
  const [dc, setDc]= useState(true);
  const [currCity, setCurrCity] = useState();

  useEffect(()=>{ setDc(!dc); },[props]  )  

//  const [displayCity, setDisplayCity]= useState(true);
  let cities = props.cities;
  
  let innerList=<div> nothing </div>

  if(props.currState== props.state&&dc)
  {
    innerList=<div >
    <ul>
      {cities.map((item,index)=> <li key={"city"+index} onClick={(event)=>{  event.stopPropagation();   setCurrCity(item.name); setDisplay(!display);}}> 
      {item.name}
      <Town towns={cities.filter(row=> row.name ==item.name)[0].towns} city={item.name} currCity={currCity} dt={display} > </Town>
      </li> )} 
      </ul> </div>;
    
  }
  else
  {
    innerList=<></>;
    
  }

  return innerList;
}

export default City;
