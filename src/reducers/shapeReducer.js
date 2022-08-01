
const initialState = 'straight'

export default function shapeReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_SHAPE' : {
            return action.payload
        }
        // case 'UPDATE_SHAPE' : {
        //     return (...state,{ action.payload})
        // }
        default : {
            return state
        }
    }
}

