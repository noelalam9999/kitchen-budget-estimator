import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const marbelCost = 3;
const tableWidth = 2;
export const wallCost = (walllength, cabinet, shutter) => {
      return (walllength * tableWidth * cabinet) + (2 * 3 * cabinet * 2) + (walllength * 3 * cabinet) + (marbelCost * walllength * 2) + (shutter * walllength * 3);
};



function WallMaterialCost() {

    const shape = useSelector((state)=>state.shape);
    
    const wallA = useSelector((state)=>state.wallA);
    const wallB = useSelector((state)=>state.wallB);
    const wallC = useSelector((state)=>state.wallC);

    const cabinet = useSelector( store => store.cabinet );
    const shutter = useSelector( store => store.shutter );

    const wallACost = wallCost(wallA, cabinet.unitCost, shutter.unitCost)
    const wallBCost = wallCost(wallB, cabinet.unitCost, shutter.unitCost)
    const wallCCost = wallCost(wallC, cabinet.unitCost, shutter.unitCost)
  

    return (
    <>
          <h3>Material Cost with Wall measurements</h3>

          <p> Wall A : ${wallACost}</p>
          
    

    { 
     (shape === "u-shaped" || shape==="parallel" || shape==="l-shaped") &&
          <p> Wall B : ${wallBCost } </p>
    }

    { shape === "u-shaped" && 
          <p> Wall C : ${wallCCost} </p>
    }
        

    </>
  )
}

export default WallMaterialCost;