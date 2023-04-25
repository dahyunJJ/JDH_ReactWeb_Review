import { createSlice } from "@reduxjs/toolkit";

import cartData from "../pages/cartData";

let cart = createSlice({
  name: "cart",
  initialState: cartData,
});

export default cart;
