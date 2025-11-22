import { createSlice } from '@reduxjs/toolkit';
import data from "../../mock_datas/data.json"

interface Product {

    id : number;
    title : string;
    price : number;
    [key : string]: any;


}

interface ProductsState {

    products : Product[]

}


const initialState : ProductsState = {

    products : []

}

const productsSlice = createSlice({

    name : "products",
    initialState,
    reducers : {

        loadProducts : (state) => {

            state.products = data

        }

    }

})

export default productsSlice.reducer 
export const { loadProducts } = productsSlice.actions

