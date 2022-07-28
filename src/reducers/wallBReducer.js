
const initialState = '5'

export default function wallBReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_WALL_B' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

