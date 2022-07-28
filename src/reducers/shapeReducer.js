
const initialState = 'l-shaped'

export default function shapeReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_SHAPE' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

