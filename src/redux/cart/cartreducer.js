import { cartActionTypes } from "./cartactionTypes";
import { addItemToCart,removeItemFromCart } from "./cartutilis";






const INITIAL_STATE = {
    CartItems:[]
};


const cartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case cartActionTypes.CART_ADD_ITEM:
            return{
                ...state,
                CartItems:addItemToCart(state.CartItems,action.payload)
            }
            case cartActionTypes.CART_REMOVE_ITEM:
            return{
                ...state,
                CartItems:removeItemFromCart(state.CartItems,action.payload)
            }
    
        default:
            return state;
    }
}


export default cartReducer;