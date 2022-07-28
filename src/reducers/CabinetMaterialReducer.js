const initialState = 'Particle Board'

export default function cabinetMaterialReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_CABINET_MATERIAL' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}