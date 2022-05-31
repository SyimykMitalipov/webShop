const addItem = [];




const addItems = (state = addItem,action) => {
    switch(action.type) {
        case "ADD_ITEM" : return [
            ...state,
            action.payload  
        ]
        break;
        case "DELETE_ITEM" : 
        return state = state.filter((product) => {
            return product.id !== action.payload.id
        })
        break;

        default :  return state;
        break;
    }
}


export default addItems;