import { createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const finedItem = state.find((item)=> item.id == action.payload.id)
            if (finedItem) {
                finedItem.qunatity+=1
            } else {
                const productClone = {...action.payload , qunatity:1}
                state.push(productClone);
            }

        },
        deleteFromCart: (state, action) => {
            return state.filter((item)=>item.id != action.payload)
        },
        clearFromCart: (state, action) => {
            return state = []
        },
    },
});
export const{deleteFromCart,clearFromCart,addToCart} = cartSlice.actions;
export default cartSlice.reducer