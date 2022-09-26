import React, { Component, useEffect, useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./../styles/App.css";
import Town from "./Town";

let displayCity=true;



function City( props) 
{
  //const [currCity, setCurrCity] = useState();

  const [seleCities, setSeleCities] = useState([]);

  const updatedCities=( city)=>{
    let newList=[...seleCities];

    //console.log("newList:", newList);
     if(newList.includes(city))
     {
       for(let i=0; i<newList.length; i++)
       {
         if(newList[i]== city)
         {
           newList.splice(i, 1);
           break;
         }
       }
     }
     else 
     newList.push(city);

     return newList;

 };


//  const [displayCity, setDisplayCity]= useState(true);
  let cities = props.cities;
  
  let innerList=<div> nothing </div>

  if(props.seleStates.includes( props.state))
  {
    innerList=<div >
    <ul>
      {cities.map((item,index)=> <li key={"city"+parseInt(index+1)} onClick={(event)=>{  event.stopPropagation();   
        setSeleCities(updatedCities(item.name))
         }}> 
      {item.name}
      <Town towns={cities.filter(row=> row.name ==item.name)[0].towns} city={item.name} seleCities={seleCities} > </Town>
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
