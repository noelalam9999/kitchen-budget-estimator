import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { wallCost } from './WallMaterialCost';

const marbelCost = 3;

const totalCost = ( sumWallCost, cabinet, shutter, shape ) => {

  if (shape =="l-shaped") {
      return sumWallCost[0] + sumWallCost[1] - (marbelCost * 2 * 2) - (2 * 3 * shutter * 2) - (2 * 3 * cabinet * 2); 
  }
  if (shape =="u-shaped") {
      return sumWallCost[0] + sumWallCost[1] + sumWallCost[2] - ((marbelCost * 2 * 2) - (2 * 3 * shutter * 2) - (2 * 3 * cabinet * 2)) * 2;
  }
  if (shape =="parallel") {
      return sumWallCost[0] + sumWallCost[1];
  }
  if (shape =="straight") {
      return sumWallCost[0];
  }


}

function TotalCost() {
  
  const shape = useSelector( store => store.shape );

  const wallA = useSelector((state)=>state.wallA);
    const wallB = useSelector((state)=>state.wallB);
    const wallC = useSelector((state)=>state.wallC);

    const cabinet = useSelector( store => store.cabinet );
    const shutter = useSelector( store => store.shutter );

    const wallACost = wallCost(wallA, cabinet.unitCost, shutter.unitCost);
    const wallBCost = wallCost(wallB, cabinet.unitCost, shutter.unitCost);
    const wallCCost = wallCost(wallC, cabinet.unitCost, shutter.unitCost);

    const sumWallCost = [wallACost, wallBCost,  wallCCost];
    
    const grossCost = totalCost(sumWallCost, cabinet.unitCost, shutter.unitCost, shape)



    return (
    <>
          <h3>Total Cost</h3>
          <p> Total Materials Cost: ${grossCost}</p>
          <p> Total Service Fee (20% of Material Cost)  : ${Math.floor(grossCost*0.2)} </p>


          <hr
          style={{
            color: '#000000',
            backgroundColor: '#ffffff',
            height: .5,
            borderColor : '#000000'}}
          />

          <h3> ${Math.floor(grossCost*0.2) + grossCost} </h3>
         

    </>
  )
}

export default TotalCost;
