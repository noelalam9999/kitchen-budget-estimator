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
    
        <span style={{fontSize:20}}>
        Cabinet Material
        </span>
        <select className="material-select" onChange={handleCabinetMaterialChange} >
                    <option > Particle Board</option>
                    <option > BWP-Ply</option>
                   
        </select>
        
        <br/>

        <span style={{fontSize:20}}>
        Shutter Material
        </span>
        <select className="material-select" onChange={handleShutterMaterialChange} >
                    <option > Particle Board Matte Laminate </option>
                    <option > BWP-Ply Matte Laminate </option>
                    <option > Particle Board Gloss Laminate </option>
                    <option > MDF Matte Membrane </option>
                    <option > BWP-Ply Gloss Laminate </option>
                    <option > MDF Gloss Membrane </option>
                   
        </select>
    
        <br/>
        

    </>
  )
}

export default Material