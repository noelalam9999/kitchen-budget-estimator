const initialState = 'Particle Board Matte Laminate'

export default function shutterMaterialReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_SHUTTER_MATERIAL' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}