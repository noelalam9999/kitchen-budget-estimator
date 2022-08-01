import React from 'react';
import { useSelector } from 'react-redux/es/exports';

function Material() {

    const cabinet = useSelector((state)=>state.cabinet);
    const shutter = useSelector((state)=>state.shutter);

    return (
    <>
             <h3>Materials unit cost</h3>
          <p> Cabinet  : {cabinet.name} (
          <> ${cabinet.unitCost}/sqft) </></p>
          <p> Shutter  : {shutter.name} (
          <> ${shutter.unitCost}/sqft)</></p>
          
         

    </>
  )
}

export default Material;