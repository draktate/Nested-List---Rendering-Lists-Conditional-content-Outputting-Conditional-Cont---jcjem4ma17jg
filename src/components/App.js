import React, { Component, useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./../styles/App.css";
import City from "./City"

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];








function App() {
  
  const [seleStates, setSeleStates] = useState([]);
  
  const updatedStates=(event, state)=>{
     let newList=[...seleStates];

     //console.log("newList:", newList);
      if(newList.includes(state))
      {
        for(let i=0; i<newList.length; i++)
        {
          if(newList[i]== state)
          {
            newList.splice(i, 1);
            break;
          }
        }
      }
      else 
      newList.push(state);

      return newList;

  };

  const outPut=<div id="main"> 
  <ul>
  {
    states.map((item, index)=>  
    <li key={"state"+parseInt(index+1)} id={"state"+parseInt(index+1)}  onClick={(event)=>{ setSeleStates(updatedStates(seleStates,item.name)); } } > 
    {item.name}
    
    <City cities={states.filter(row=> row.name ==item.name)[0].cities} state={item.name} seleStates={seleStates} >
    </City> 
    
    </li>)} 
  </ul>  
  </div>;
 
  
  //const [outPut, setOutput]=useState();

 

  
  return   outPut;
  
}

export default App;
