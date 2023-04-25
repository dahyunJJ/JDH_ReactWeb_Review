import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: {
    name: "jeong",
    age: 2,
  },
});

export default user;
