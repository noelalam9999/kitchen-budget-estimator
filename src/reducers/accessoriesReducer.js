const initialState = []

export default function accessoriesReducer(state=initialState, action){
    switch (action.type) {
        case 'ADD_ACCESSORIES' : {
            
            return [...state,action.payload];

        }
        case 'DEDUCT_ACCESSORIES' : {


                const index = state.lastIndexOf(action.payload)
              
               if( index === 0 ) return initialState;

               if (index && state.length>0){
     
                state.splice(index,1)
                console.log(state)
                return state;  
            }
            
            return state;
            
        }
        default : {
            return state
        }
    }
}