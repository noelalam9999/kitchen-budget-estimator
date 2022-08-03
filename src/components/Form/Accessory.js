import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react'
//import { grossAccWidth } from './Accessories';

function checkSpace(shape,wallA,wallB,wallC,grossAccWidthValue) {

  //console.log(wallA , wallB, grossAccWidthValue)
  //console.log(1.0*wallA + 1.0*wallB - 1.0*4 - 1.0*2 - 1.0*grossAccWidthValue > 4)
  //console.log(wallA + wallB)
    if (shape === "l-shaped"){
      
        if(1.0*wallA + 1.0*wallB - 4 - 2 - 1.0*grossAccWidthValue > 4 ) return true
    }
    
    if (shape === "u-shaped"){
      if(1.0*wallA + 1.0*wallB + 1.0*wallC - 8 - 2 - 1.0*grossAccWidthValue > 4 ) return true
    }

    if (shape === "parallel"){
      if(1.0*wallA + 1.0*wallB  - 2 - 1.0*grossAccWidthValue > 4 ) return true
    }
    
    if (shape === "straight"){
      if(1.0*wallA - 2 - 1.0*grossAccWidthValue > 4 ) return true
    }
    return false
}

function grossAccWidth(accessories){
  let acc = 0
  accessories.forEach((accessory)=>{
    acc += accessory.width;
  })
  return acc
}


function Accessory({ accessory, id, image, name}) {

  const dispatch = useDispatch();
  const accessories = useSelector((state)=>state.accessories);
  
 //let quantity = accessories.filter((accessorie)=> { if(id) {return accessorie.id === id}});
 
  const [quantity, setQuantity] = useState([])

    useEffect(
      ()=>{
        console.log("accessories")
        setQuantity(accessories.filter((accessorie)=> { if(id) {return accessorie.id === id}}))
      },[accessories]
    )

  const shape = useSelector((state)=> state.shape)
  const wallA = useSelector((state)=> state.wallA)    
  const wallB = useSelector((state)=> state.wallB)
  const wallC = useSelector((state)=> state.wallC)
  
  // const grossAccWidth = accessories.length > 0 ? accessories.reduce((acc,accessorie)=>{
   
  //   return acc + accessorie.width;
  // }) : 0;


  const Add = () => {
    
    const grossAccWidthValue = grossAccWidth(accessories);
    // console.log(wallA,wallB,6,grossAccWidthValue)
    // console.log(checkSpace(shape,wallA,wallB,wallC,grossAccWidthValue))
   
      //  dispatch({
      //   type : 'ADD_ACCESSORIES',
      //   payload : accessory
      // })
    // console.log(checkSpace(shape,wallA,wallB,wallC,grossAccWidthValue))
    // console.log(shape,wallA,wallB,wallC,grossAccWidthValue)
      if (checkSpace(shape,wallA,wallB,wallC,grossAccWidthValue)){
      
          if(id){
            dispatch({
              type : 'ADD_ACCESSORIES',
              payload : accessory
            })
            setQuantity(accessories.filter((accessorie)=> { if(id) {return accessorie.id === id}}))
          }
            
      }

      else {
        alert("Not enough space in your current arrangement")}
  }

  const Deduct = () => {
    if(id){
     dispatch(
      {
        type: 'DEDUCT_ACCESSORIES',
        payload : accessory
      }
     )
    }
   // quantity = accessories.filter((accessorie)=> { if(id) {return accessorie.id === id}});
    setQuantity(accessories.filter((accessorie)=> { if(id) {return accessorie.id === id}}))
  }
  return (
    <>
     <div 
            style={{minHeight:"250px"}}
          >
            <img alt="accessory" style={{width:"150px", margin: "5px"}} src={image}/>
            <p>{name}</p>
            <span >   
            <input style={{borderRadius:"12px",backgroundColor:"#6dd985",color:"black",marginRight:"auto"}} onClick={Add} value="+" type="button"/>
            { 
              quantity.length>0 && (
              <>

                &nbsp;{quantity.length}&nbsp; 
                
                <input style={{borderRadius:"12px",backgroundColor:"#ff9967",color:"black"}} onClick={Deduct} value="-" type="button"/>
                
                </>)
                }
                </span>
          </div>
        
    </>
  )
}

export default Accessory