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
            <h3>
                Shape
            </h3>
            <img style={{margin:"3px"}} height="150px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659306489/l-shaped_y5zfws.jpg"/>
            <img style={{margin:"3px"}} height="150px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659306489/u-shaped_stnd2a.jpg"/>
            <img style={{margin:"3px"}} height="150px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659306489/parallel_eghssl.jpg"/>
            <img style={{margin:"3px"}} height="150px" width="220px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659306489/straight_a9egjw.jpg"/><br/>

              <span style={{margin:"3vw"}}><input  onChange={handleShapeChange} type="radio" id="l-shaped" name="shape" value="l-shaped" /><label htmlFor='l-shaped'>L-shaped</label></span>

           
              <span style={{margin:"3vw"}}><input  onChange={handleShapeChange} type="radio" id="u-shaped" name="shape" value="u-shaped" /><label htmlFor='u-shaped'>U-shaped</label></span>

            
              <span style={{margin:"3vw"}}> <input  onChange={handleShapeChange} type="radio" id="parallel" name="shape" value="parallel" /><label htmlFor='parallel'>Parallel</label></span>

           
              <span style={{margin:"3vw"}}> <input  onChange={handleShapeChange} type="radio" id="straight" name="shape" value="straight" /><label htmlFor='straight'>Straight</label></span>
            </div>

        <div style={{display:"flex", justifyContent:"center"}}>
            <div>
            
            <span style={{fontSize:20}} htmlFor='wallA'>
            Wall A (ft) &nbsp;
            </span>
            <select className="wall-select" id='wallA' onChange={handleWallAChange} >
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
                </div>  


           {  (shape === "u-shaped" || shape==="parallel" || shape==="l-shaped")   &&
            <>
            <div>
                <span style={{fontSize:20}} htmlFor='wallB'>
                  Wall B (ft)
                </span>
                <select className="wall-select" id='wallB' onChange={handleWallBChange} >
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
                </div>
            </>
           } 
     

           { shape ==="u-shaped" && <>
           <div>
            <span style={{fontSize:20}} htmlFor='wallC'>
            Wall C (ft)
            </span>
            <select className="wall-select" id='wallC' onChange={handleWallCChange} >
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
                </div>
            </>}
        </div>     
    </div>
  )
}

export default Wall