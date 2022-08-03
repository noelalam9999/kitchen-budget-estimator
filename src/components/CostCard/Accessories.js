import React from 'react';
import { useSelector } from 'react-redux';

export function grossAccPrice(accessories){
  let acc = 0
  accessories.forEach((accessory)=>{
    acc += accessory.price;
  })
  return acc
}

function Accessories() {

 const accessories = useSelector((state)=>state.accessories)
 const totalPrice = grossAccPrice(accessories)

    return (
    <>
          <h3>Accessories Cost</h3>
          {accessories.length > 0 &&
              <>
                  <p> No of Accessories : {accessories.length}</p>
                    <p> Cost  : ${totalPrice} </p>
              </>
          }
          {
            accessories.length === 0 &&
                <p>No Accessories Added Yet</p>
          }

    </>
  )
}

export default Accessories;