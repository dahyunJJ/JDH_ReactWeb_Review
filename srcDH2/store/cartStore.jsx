import { createSlice } from "@reduxjs/toolkit";
import cartData from "./cartData";

let cart = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((item) => item._id === action.payload);
      state[num].count++;
    },
    minusCount(state, action) {
      let num = state.findIndex((item) => item._id === action.payload);
      state[num].count--;
    },
    addItem(state, action) {
      let num = state.findIndex((item) => item._id === action.payload._id);
      if (num === -1) state.push(action.payload);
      if (num !== -1) state[num].count += action.payload.count;
      console.log("num", num);
      console.log("보내는정보", action.payload._id);
    },
    deleteItem(state, action) {
      // Cart.jsx 삭제 버튼에서 id값을 보내주고 있기 때문에 payload 뒤에 ._id를 하지 않아도 된다
      let num = state.findIndex((item) => item._id === action.payload);
      state.splice(num, 1);
    },
  },
});

export const { addCount, minusCount, addItem, deleteItem } = cart.actions;
export default cart;
