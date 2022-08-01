import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

function checkSpace(shape,wallA,wallB,wallC,grossAccWidth) {
  
    if (shape === "l-shaped"){
        if(wallA + wallB - 4 - 2 - grossAccWidth > 4 ) return true
    }
    if (shape === "u-shaped"){
      if(wallA + wallB + wallC - 8 - 2 - grossAccWidth > 4 ) return true
    }
    if (shape === "parallel"){
      if(wallA + wallB  - 2 - grossAccWidth > 4 ) return true
    }
    if (shape === "straight"){
      if(wallA - 2 - grossAccWidth > 4 ) return true
    }
    return false
}


function Accessory({id, image, name}) {

  const dispatch = useDispatch();
  const accessories = useSelector((state)=>state.accessories)
  const quantity = accessories.filter((accessorie)=> {return accessorie === id})

  const shape = useSelector((state)=> state.shape)
  const wallA = useSelector((state)=> state.wallA)
  const wallB = useSelector((state)=> state.wallB)
  const wallC = useSelector((state)=> state.wallC)
  
  const grossAccWidth = accessories.length > 0 ? accessories.reduce((acc,accessorie)=>{
    return acc + accessorie.width;
  }) : 0;


  const Add = () => {
      if (checkSpace(shape,wallA,wallB,wallC,grossAccWidth)){
      
    
            dispatch({
              type : 'ADD_ACCESSORIES',
              payload : id
            })
      }

      else {
        alert("Not enough space in your current arrangement")}
  }

  const Deduct = () => {
     dispatch(
      {
        type: 'DEDUCT_ACCESSORIES',
        payload : id
      }
     )
  }
  return (
    <>
     <div 
            style={{minHeight:"250px"}}
          >
            <img alt="accessory" style={{width:"150px", margin: "5px"}} src={image}/>
            <p>{name}</p>
            <span >   
            <input style={{borderRadius:"12px",backgroundColor:"green",color:"white",marginRight:"auto"}} onClick={Add} value="+" type="button"/>
            { 
              quantity.length>0 && (
              <>

                &nbsp;{quantity.length}&nbsp; 
                
                <input style={{borderRadius:"12px",backgroundColor:"red",color:"white"}} onClick={Deduct} value="-" type="button"/>
                
                </>)
                }
                </span>
          </div>
        
    </>
  )
}

export default Accessory