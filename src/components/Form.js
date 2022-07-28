import React from 'react';
import { useState} from 'react';
import {useDispatch} from 'react-redux';
import Accessories from './Form/Accessories';
import Material from './Form/Material';
import Wall from './Form/Wall';

function Form ({onSubmit}) {



  return (
    <div className="form">
      <h2>Form</h2>
        
            
         <Wall/>
        <Material/>
        <Accessories/>
            
            

            


        

    </div>
  )
}

export default Form