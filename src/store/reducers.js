import * as actionType from './actions'
const initialState = {
    ingredients :{
        cheese : 0,
        salad :0,
        meat : 0,
        Bacon : 0
    },
    total_price: 0,
}
const reducer = (state = initialState , action ) => {
    switch(action.type){
        case actionType.ADD_INGREDIENTS : return{
                ...state,
                ingredients : {
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                }

        }
        case actionType.REMOVE_INGREDIENTS : return{
            ...state,
                ingredients : {
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                }
        }
        default : return state;
    }
    return state
}

export default reducer;