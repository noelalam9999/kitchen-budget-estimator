import React from 'react'
import {useSelector} from 'react-redux';
import Wall from './CostCard/Wall';
function CostCard() {
  const shape = useSelector((state)=> state.shape)
  return (
    <div className='cost-card'>
      <h2>Cost Card</h2>
      <Wall/>

    </div>
  )
}

export default CostCard