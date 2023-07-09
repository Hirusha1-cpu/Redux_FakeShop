import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products:[

        // {
        // id:1,
        // title:'Hirus',
        // category:"Programmer" }
    ]
}
export const productReducer = (state =initialState,{type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products: payload}
      
        default:
            return state;
    }
} 

export const selectedProductReducer =  (state= {},{type, payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
    
        default:
            return state;
    }
}