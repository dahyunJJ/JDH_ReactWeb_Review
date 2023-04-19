import { configureStore } from "@reduxjs/toolkit";

import user from "./store/userSlice";
import cart from "./store/cartSlice";
import data from "./store/productSlice";

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
    data: data.reducer,
  },
});
