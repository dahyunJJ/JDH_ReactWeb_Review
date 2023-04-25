import { createSlice } from '@reduxjs/toolkit'
import list from "./productData";

let productData = createSlice({
  name: 'productData',
  initialState: list,
})

export default productData