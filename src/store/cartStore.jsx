import { createSlice } from '@reduxjs/toolkit'
import cartData from './cartData'

let cart = createSlice({
  name: 'cart',
  initialState: cartData,
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((item) => item._id === action.payload)
      state[num].count++
    },
    minusCount(state, action) {
      let num = state.findIndex((item) => item._id === action.payload)
      state[num].count--
    },
    addItem(state, action) { 
      let num = state.findIndex((item) => item._id === action.payload._id)
      if(num === -1) state.push(action.payload)
      if(num !== -1) state[num].count += action.payload.count
      console.log('num', num);
      console.log('보내는 정보', action.payload._id);
    },

    deleteItem(state, action){
      let num = state.findIndex((item) => item._id === action.payload)
      state.splice(num, 1)
    }
  }
})
export const { addCount, minusCount, addItem, deleteItem } = cart.actions
export default cart