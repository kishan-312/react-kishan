import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity?: number;
    [key : string]: any  
}


interface CartState {

    cart : CartItem[] 

}

const initialState : CartState = {

    cart : []

}

const cartSlice = createSlice({

    name : "cart",
    initialState,
    reducers : {

        addData : (state,action :  PayloadAction<CartItem> ) => {

            state.cart = [...state.cart , action.payload ]

        }

    }

})

export default cartSlice.reducer
export const { addData  } = cartSlice.actions

