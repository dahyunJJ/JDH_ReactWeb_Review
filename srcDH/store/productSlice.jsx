import { createSlice } from "@reduxjs/toolkit";

import list from "../pages/productData";

let data = createSlice({
  name: "data",
  initialState: list,
});

export default data;
