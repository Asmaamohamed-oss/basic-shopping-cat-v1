import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const fetchProducts = createAsyncThunk("fetchProducts",async function(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data
});

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        console.log(builder);
        // console.log(fetchProducts);///Action Creator
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            console.log(action);
        })
    }
});
export const {addProduct} = productsSlice.actions
export default productsSlice.reducer