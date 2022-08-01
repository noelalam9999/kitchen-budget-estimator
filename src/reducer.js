//@ts-check
import { combineReducers } from 'redux'
import accessoriesReducer from './reducers/accessoriesReducer'
import cabinetMaterialReducer from './reducers/CabinetMaterialReducer'
import shapeReducer from './reducers/shapeReducer'
import shutterMaterialReducer from './reducers/ShutterMaterialReducer'
import wallAReducer from './reducers/wallAReducer'
import wallBReducer from './reducers/wallBReducer'
import wallCReducer from './reducers/wallCReducer'


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  shape: shapeReducer,
  wallA : wallAReducer,
  wallB : wallBReducer,
  wallC : wallCReducer,
  shutter : shutterMaterialReducer,
  cabinet : cabinetMaterialReducer,
  accessories : accessoriesReducer
  // filters: filtersReducer,
})


export default rootReducer