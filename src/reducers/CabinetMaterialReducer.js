const initialState = {
    id : 1, 
    name : 'Particle Board',
    unitCost : '3'
}

const materials = [
    {
        id : 1, 
        name : 'Particle Board',
        unitCost : '3'
    },
    {
        id: 2,
        name : 'BWP-Ply',
        unitCost : '4'
    }
]

export default function cabinetMaterialReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_CABINET_MATERIAL' : {
            
            return materials.filter((material)=> {return material.name==action.payload})[0]
        }
        default : {
            return state
        }
    }
}