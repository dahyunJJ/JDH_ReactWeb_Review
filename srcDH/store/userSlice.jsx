import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "jeong", age: 20 },
  reducers: {
    changeName: (state) => {
      state.name = "jeongdh";
    },
    increaseAge: (state, action) => {
      state.age += action.payload;
    },
  },
});

export let { changeName, increaseAge } = user.actions;
// 디스트럭쳐링 문법을 이용해서 user 안에 있는 action 들을 export
// actions 는 reducers 안에 있는 모든 변경 함수를 담아오는 기능

export default user;
