
const initialState = '5'



export default function wallAReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_WALL_A' : {
            
            return action.payload
        }
        default : {
            return state
        }
    }
}

