import React from 'react'
import CostCard from './CostCard'
import Form from './Form'
import '../styles/Calculator.css'
function Calculator() {
    

    
    return (
        <div className="calculator">
            <Form/>
            <CostCard/>
        </div>
  )
}

export default Calculator