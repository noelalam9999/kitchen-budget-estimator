import React from 'react';
import { useSelector } from 'react-redux/es/exports';

function Material() {

    const cabinet = useSelector((state)=>state.cabinet);
    const shutter = useSelector((state)=>state.shutter);

    console.log(cabinet)
    return (
    <>
     
          <p> Cabinet Material : {cabinet.name} </p>
          <p> Unit Cost (sqft): ${cabinet.unitCost} </p>
          <p> Shutter Material : {shutter.name} </p>
          <p> Unit Cost (sqft): ${shutter.unitCost} </p>
          
         

    </>
  )
}

export default Material;