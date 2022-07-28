import React from 'react'
import { useSelector } from 'react-redux/es/exports'
function Wall() {
    const shape = useSelector((state)=>state.shape)
  return (
    <div>{shape}</div>
  )
}

export default Wall