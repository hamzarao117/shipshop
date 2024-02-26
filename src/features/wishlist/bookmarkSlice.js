import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkList: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark(state, action) {
      state.bookmarkList.push(action.payload);
    },
    deleteBookmark(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBookmark, deleteBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
