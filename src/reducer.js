//@ts-check
import { combineReducers } from 'redux'
import shapeReducer from './reducers/shapeReducer'


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  shape: shapeReducer,
  // filters: filtersReducer,
})


export default rootReducer