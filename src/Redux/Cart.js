import {createSlice} from '@reduxjs/toolkit';



const CartManage = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },

    reducers:{
        addToCart:(state,action)=>{
            const userAdded = state.cart.find(pd => pd.id === action.payload.id);
            if(userAdded){
               userAdded.quantity += action.payload.quantity || 1;   
            }
            else{
                state.cart.push({...action.payload, quantity: action.payload.quantity || 1})
            }
        },

        removeFromCart:(state,action) =>{
            state.cart = state.cart.filter(pd => pd.id !== action.payload.id)
        }


    }
})


export const {addToCart,removeFromCart} = CartManage.actions;
export default CartManage.reducer;
