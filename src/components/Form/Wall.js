import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

const shapeInputStyle = {margin:"0vw"};
//const shapeStyle = {marginRight:"1.1vw",marginLeft:"1.1vw"};

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
    <div className='wall'>
           
            <div className="shape">
                <br/>
            <p style={{fontSize:20}}>
                Shape
            </p>

              <div className = "shapes">
              <div style={shapeInputStyle}> <img  width="120px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659352869/l-shaped_zhwgjh.png"/><br/><input  onChange={handleShapeChange} type="radio" id="l-shaped" name="shape" value="l-shaped" /><label htmlFor='l-shaped'>L-shaped</label></div>

           
              <div style={shapeInputStyle}> <img  width="120vw" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659352869/u-shaped_gftoxk.png"/><br/><input  onChange={handleShapeChange} type="radio" id="u-shaped" name="shape" value="u-shaped" /><label htmlFor='u-shaped'>U-shaped</label></div>

            
              <div style={shapeInputStyle}> <img  height="120px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659352869/parallel_prncwg.png"/> <br/><input  onChange={handleShapeChange} type="radio" id="parallel" name="shape" value="parallel" /><label htmlFor='parallel'>Parallel</label></div>

           
              <div style={shapeInputStyle}>  <img height="120px" src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1659354074/straight_gwuijl.png"/><br/><input  onChange={handleShapeChange} type="radio" id="straight" name="shape" value="straight" /><label htmlFor='straight'>Straight</label></div>
              </div>
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