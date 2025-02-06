export const ADD_TO_CARD = "ADD_TO_CARD";
export const REMOVE_TO_CARD = "REMOVE_TO_CARD";

export const addToCard = (product) =>({
    type: 'ADD_TO_CARD',
    payload: product

})

export const removeToCard = (id) =>({
    type: 'REMOVE_TO_CARD',
    payload: id
})