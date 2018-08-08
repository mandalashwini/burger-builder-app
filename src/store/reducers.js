import * as actionType from './actions'
const initialState = {
    ingredients :{
        salad : 1,
        cheese : 1,
        meat : 0,
        Bacon : 0
    }
    
}
const reducer = (state = initialState , action ) => {


    switch(action.type){
        case actionType.ADD_INGREDIENTS : 
            debugger
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                }

            }
        case actionType.REMOVE_INGREDIENTS:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                }

            }
        default: 
                return state
    }
    
}

export default reducer;