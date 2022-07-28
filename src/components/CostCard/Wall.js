import React from 'react';
import { useSelector } from 'react-redux/es/exports';

function Wall() {

    const shape = useSelector((state)=>state.shape);
    
    const wallA = useSelector((state)=>state.wallA);
    const wallB = useSelector((state)=>state.wallB);
    const wallC = useSelector((state)=>state.wallC);

    const cabinet = useSelector((state)=>state.cabinet);
    const shutter = useSelector((state)=>state.shutter);

    return (
    <>
          <p>Shape : {shape}</p>

          <p>Wall A : {wallA}</p>
          <p>Cost : {wallA}</p>
    

    { 
     (shape === "u-shaped" || "parallel" || "l-shaped") &&
          <p> Wall B : {wallB } </p>
    }

    { shape === "u-shaped" && 
          <p> Wall C : {wallC} </p>
    }
          <p> Cabinet Material : {cabinet} </p>
          <p> Shutter Material : {shutter} </p>
          <p> Cost of Wall A : {shutter} </p>

    </>
  )
}

export default Wall;