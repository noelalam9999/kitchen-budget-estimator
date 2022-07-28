
const initialState = '5'

export default function wallCReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_WALL_C' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

