import { cartItems } from "../initialValues/cartItems";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cartItems : cartItems
}

export default function cartReducer(state = initialState, {type,payload}){ //gönderdiğimiz actiona göre sepetin 
                                                                            //son halini tuttuğumuz yer
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if(product){
                product.quantity ++;
                return {  //newlemiş olduk, referansı değiştirdik
                    ...state
                }
            }
            else{
                return {
                    ...state, //cartItems dışında initialStateteki diğer değerleri tutabiliriz
                    cartItems: [...state.cartItems, {quantity:1,product:payload}]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c=> c.product.id !== payload.id) //filter ref değiştirdi
            }
    
        default:
            return state;
    }

}