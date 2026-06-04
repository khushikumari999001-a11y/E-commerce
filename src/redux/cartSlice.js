import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
  name: "cart",
  initialState : [],
  reducers : {
    AddItem : (state,action) => {
      state.push(action.payload)
    },
    removeItem : (state,action) => {
      return state.filter((item) => (
        item.id !== action.payload
      ));
       
    },
    clearCart: () => {
      return [];
    }

  },


})

export const {AddItem , removeItem , clearCart} = cartSlice.actions
export default cartSlice.reducer