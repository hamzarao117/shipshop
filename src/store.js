import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import bookmarkReducer from "./features/wishlist/bookmarkSlice";
import viewReducer from "./features/store/viewSlice";
import searchReducer from "./features/categories/searchSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    bookmark: bookmarkReducer,
    view: viewReducer,
    search: searchReducer,
  },
});

export default store;
