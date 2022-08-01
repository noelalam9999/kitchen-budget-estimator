import React from 'react';
import { useState} from 'react';
import {useDispatch} from 'react-redux';
import Accessories from './Form/Accessories';
import Material from './Form/Material';
import Wall from './Form/Wall';
import '../styles/Form.css'
function Form ({onSubmit}) {



  return (
    <div className="form">
      <h2>Dream Kitchen Price Calculator</h2>
      <span style={{fontSize:20}}>Supply the measurements of your dream kitchen in the fields below and see the price change at the bottom</span>
        
            
         <Wall/>
        <Material/>
        <Accessories/>
            
            

            


        

    </div>
  )
}

export default Form