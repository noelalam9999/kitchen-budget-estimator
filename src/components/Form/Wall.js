import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

function Wall() {

 

    const dispatch = useDispatch();
    const shape = useSelector((state)=>state.shape)
    const handleShapeChange = (e) => {
        
        dispatch({
            type : 'SET_SHAPE',
            payload : e.target.value
        });
        
    }

    const handleWallBChange = (e) => {
        console.log(e.target.value)
    }

  return (
    <div>
           
            <div className="shape">
            <label>
                Shape
            </label>
              <input onChange={handleShapeChange} type="radio" id="l-shaped" name="shape" value="l-shaped" />L-shaped
              <input onChange={handleShapeChange} type="radio" id="u-shaped" name="shape" value="u-shaped" />U-shaped
              <input onChange={handleShapeChange} type="radio" id="parallel" name="shape" value="parallel" />Parallel
              <input onChange={handleShapeChange} type="radio" id="straight" name="shape" value="straight" />Straight
            </div>

            <label>
            Wall A
            </label>
            <select onChange={handleWallBChange} >
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


           {  shape == "u-shaped"    &&
            <>
                <label>
                  Wall B
                </label>
                <select onChange={handleWallBChange} >
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
               {  shape == "parallel"    &&
            <>
                <label>
                  Wall B
                </label>
                <select onChange={handleWallBChange} >
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
               {  shape == "l-shaped"    &&
            <>
                <label>
                  Wall B
                </label>
                <select onChange={handleWallBChange} >
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

           { shape =="u-shaped" && <>
            <br/><label>
            Wall C
            </label>
            <select onChange={handleWallBChange} >
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