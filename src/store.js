import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import bookmarkReducer from "./features/wishlist/bookmarkSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
