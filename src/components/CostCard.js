import React from 'react'
import Accessories from './CostCard/Accessories';
import Material from './CostCard/Material';
import TotalCost from './CostCard/TotalCost';
import Wall from './CostCard/Wall';
import WallMaterialCost from './CostCard/WallMaterialCost';
import '../styles/CostCard.css'
function CostCard() {

  return (
    <div className='cost-card'>
      <h2>Cost Card</h2>
      <Wall/>
      <br/>
      <Material/>
      <br/>
      <WallMaterialCost/>
      <br/>
      <Accessories/>
       <br/> 
      <TotalCost/>

    </div>
  )
}

export default CostCard