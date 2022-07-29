import React from 'react';
import { useSelector } from 'react-redux/es/exports';

function Wall() {

    const shape = useSelector((state)=>state.shape);
    
    const wallA = useSelector((state)=>state.wallA);
    const wallB = useSelector((state)=>state.wallB);
    const wallC = useSelector((state)=>state.wallC);


    return (
    <>
          <p>Shape : {shape}</p>

          <p>Wall A : {wallA}</p>
          
    

    { 
     (shape === "u-shaped" || "parallel" || "l-shaped") &&
          <p> Wall B : {wallB } </p>
    }

    { shape === "u-shaped" && 
          <p> Wall C : {wallC} </p>
    }
        

    </>
  )
}

export default Wall;