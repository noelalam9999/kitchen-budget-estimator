import React from 'react';
import { useSelector } from 'react-redux/es/exports';

function Wall() {

    const shape = useSelector((state)=>state.shape);
    
    const wallA = useSelector((state)=>state.wallA);
    const wallB = useSelector((state)=>state.wallB);
    const wallC = useSelector((state)=>state.wallC);


    return (
    <>
          <h3>Wall Measurements</h3>
          <p>Shape : <span className='value'>{shape}</span></p>

        <>Dimentions: <span className='value'>{wallA}ft</span> </>
          
    

    { 
     (shape === "u-shaped" || shape=== "parallel" ||shape=== "l-shaped") &&
          <> x{wallB }ft </>
    }

    { shape === "u-shaped" && 
          <> x{wallC}ft </>
    }
        

    </>
  )
}

export default Wall;