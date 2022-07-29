import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

function Wall() {

 

    const dispatch = useDispatch();
    
    const handleShapeChange = (e) => {
        
        dispatch({
            type : 'SET_SHAPE',
            payload : e.target.value
        });

    }
    const shape = useSelector((state)=>state.shape)

    const handleWallAChange = (e) => {
        dispatch({
            type : 'SET_WALL_A',
            payload : e.target.value
        });
    }

    const handleWallBChange = (e) => {
        dispatch({
            type : 'SET_WALL_B',
            payload : e.target.value
        });
    }

    const handleWallCChange = (e) => {
        dispatch({
            type : 'SET_WALL_C',
            payload : e.target.value
        });
    }

  return (
    <div>
           
            <div className="shape">
            <label>
                Shape
            </label>
              <input onChange={handleShapeChange} type="radio" id="l-shaped" name="shape" value="l-shaped" /><label htmlFor='l-shaped'>L-shaped</label>
              <input onChange={handleShapeChange} type="radio" id="u-shaped" name="shape" value="u-shaped" /><label htmlFor='u-shaped'>U-shaped</label>
              <input onChange={handleShapeChange} type="radio" id="parallel" name="shape" value="parallel" /><label htmlFor='parallel'>Parallel</label>
              <input onChange={handleShapeChange} type="radio" id="straight" name="shape" value="straight" /><label htmlFor='straight'>Straight</label>
            </div>

            <label htmlFor='wallA'>
            Wall A (ft)
            </label>
            <select id='wallA' onChange={handleWallAChange} >
                    <option >5</option>
                    <option >6</option>
                    <option >7</option>
                    <option >8</option>
                    <option >9</option>
                    <option >10</option>
                    <option >11</option>
                    <option >12</option>
                    <option >13</option>
                    <option >14</option>
                    <option >15</option>
                    <option >16</option>
                    <option >17</option>
                    <option >18</option>
                    <option >19</option>
                    <option >20</option>
                </select>
             <br/>          


           {  (shape === "u-shaped" || shape==="parallel" || shape==="l-shaped")   &&
            <>
                <label htmlFor='wallB'>
                  Wall B
                </label>
                <select id='wallB' onChange={handleWallBChange} >
                    <option >5</option>
                    <option >6</option>
                    <option >7</option>
                    <option >8</option>
                    <option >9</option>
                    <option >10</option>
                    <option >11</option>
                    <option >12</option>
                    <option >13</option>
                    <option >14</option>
                    <option >15</option>
                    <option >16</option>
                    <option >17</option>
                    <option >18</option>
                    <option >19</option>
                    <option >20</option>
                </select>
            </>
           } 
     

           { shape ==="u-shaped" && <>
            <br/>
            <label htmlFor='wallC'>
            Wall C
            </label>
            <select id='wallC' onChange={handleWallCChange} >
                    <option >5</option>
                    <option >6</option>
                    <option >7</option>
                    <option >8</option>
                    <option >9</option>
                    <option >10</option>
                    <option >11</option>
                    <option >12</option>
                    <option >13</option>
                    <option >14</option>
                    <option >15</option>
                    <option >16</option>
                    <option >17</option>
                    <option >18</option>
                    <option >19</option>
                    <option >20</option>
                </select>
            </>}
    </div>
  )
}

export default Wall