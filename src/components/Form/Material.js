import React from 'react'

function Material() {


    const handleCabinetMaterialChange = (e) => {
        console.log(e.target.value)
    }

  return (
    <>
        <label>
        Cabinet Material
        </label>
        <select onChange={handleCabinetMaterialChange} >
                    <option >5</option>
                    <option >6</option>
                   
        </select>
        
        <br/>

        <label>
        Shutter Material
        </label>
        <input name="itemName" type="text"/>
    
        <br/>

    </>
  )
}

export default Material