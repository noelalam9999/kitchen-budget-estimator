import React from 'react';
import {useDispatch} from 'react-redux';

function Material() {

    const dispatch = useDispatch();

    const handleCabinetMaterialChange = (e) => {
        dispatch({
            type : 'SET_CABINET_MATERIAL',
            payload : e.target.value
        });
    }

    const handleShutterMaterialChange = (e) => {
        dispatch({
            type : 'SET_SHUTTER_MATERIAL',
            payload : e.target.value
        });
    }

  return (
    <>
    <div className = "material">
       
        <span style={{fontSize:20}}>
        Cabinet Material
        </span>
        <span className='cabinet-tooltip'>
        <select className="material-select" onChange={handleCabinetMaterialChange} >
                    <option > Particle Board</option>
                    <option > BWP-Ply</option>
                   
        </select>
        <span className='cabinet-tooltip-text'>

            <span>
                Particle Board - <br/>
                Usage : All kitchen Units except sink unit <br/>
                Resistant to moisture <br/>
                

            </span>
            <br/>
            <span>
                BWP-Ply  
                <br/>
                Usage : All kitchen units <br/>
                Resistant to Water       
            </span>    
        </span>
      
        </span>
        <br/>

        <span style={{fontSize:20}}>
        Shutter Material
        </span>
        <span className="shutter-tooltip">
        <select className="material-select" onChange={handleShutterMaterialChange} >
                    <option > Particle Board Matte Laminate </option>
                    <option > BWP-Ply Matte Laminate </option>
                    <option > Particle Board Gloss Laminate </option>
                    <option > MDF Matte Membrane </option>
                    <option > BWP-Ply Gloss Laminate </option>
                    <option > MDF Gloss Membrane </option>
                   
        </select>
        <span className='shutter-tooltip-text'>

                <span>
                    Particle Board - <br/>
            
                    Resistant to moisture <br/>
                    

                </span>
                <br/>
                <span>
                    BWP-Ply  
                    <br/>
                   
                    Resistant to Water       
                </span>
                <br/>    
               
                </span>

        </span>
    
        <br/>
        
    </div>
    </>
  )
}

export default Material