const initialState = {
    id : 1, 
    name : 'Particle Board Matte Laminate',
    unitCost : '3'
}

const materials = [
    {
        id : 1, 
        name : 'Particle Board Matte Laminate',
        unitCost : '3'
    },
    {
        id: 2,
        name : 'BWP-Ply Matte Laminate',
        unitCost : '4'
    },
    {
        id : 3, 
        name : 'Particle Board Gloss Laminate',
        unitCost : '3'
    },
    {
        id: 4,
        name : 'MDF Matte Membrane',
        unitCost : '4'
    },
    {
        id : 5, 
        name : 'BWP-Ply Gloss Laminate',
        unitCost : '3'
    },
    {
        id: 6,
        name : 'MDF Gloss Membrane',
        unitCost : '4'
    }
]

export default function shutterMaterialReducer(state=initialState, action){
    switch (action.type) {
        case 'SET_SHUTTER_MATERIAL' : {
            return materials.filter((material)=> {return material.name==action.payload})[0]
        }
        default : {
            return state
        }
    }
}