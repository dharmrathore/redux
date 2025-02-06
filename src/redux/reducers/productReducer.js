import { ADD_TO_CARD, REMOVE_TO_CARD } from "../actions/productActions";


const initialStateProduct ={
    cardData: [],
}

const  productReducer = (state = initialStateProduct, action) =>{
    switch(action.type){
        case 'ADD_TO_CARD':
            console.log('Adding to cart',action)
            return {
               ...state,
                cardData: [...state.cardData, action.payload],
            }
        case 'REMOVE_TO_CARD':
            console.log("Removing from cart:", action.payload);
            return {
               ...state,
                cardData: state.cardData.filter(item => item.id!==action.payload.id),
            }
        default:
            return state;
    }
}

export default productReducer