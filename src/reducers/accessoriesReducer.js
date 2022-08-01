const initialState = []

export default function accessoriesReducer(state=initialState, action){
    switch (action.type) {
        case 'ADD_ACCESSORIES' : {
            
            return [...state,action.payload];
        }
        case 'DEDUCT_ACCESSORIES' : {

            if (state.indexOf(action.payload)!=null && state.length>0){
                const new_state = state.splice(state.indexOf(action.payload),0);
                console.log(new_state)
                return  state;  
            }
            
            return state
            
        }
        default : {
            return state
        }
    }
}