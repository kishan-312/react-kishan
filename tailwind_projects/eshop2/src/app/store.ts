import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice.ts"
import navbarReducer from "../features/navbar/navbarSlice.ts"
import productsReducer from "../features/products/productsSlice.ts"
import cartReducer from "../features/cart/cartSlice.ts"

export const store = configureStore({

    reducer : {

        theme : themeReducer,
        navbar : navbarReducer,
        products : productsReducer,
        cart : cartReducer

    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



