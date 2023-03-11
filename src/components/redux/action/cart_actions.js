import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
    return{
        type: ActionTypes.ADD_CART,
        payload: product
    }
}
export const noofproducts=() =>{
    return {
        type:ActionTypes.GET_NUMBER_CART
    }
}