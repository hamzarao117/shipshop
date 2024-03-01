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
      state.bookmarkList = state.bookmarkList.filter(
        (item) => item.id !== action.payload
      );
    },
    clearBookmark(state) {
      alert("Do you want to delete your List?");
      state.bookmarkList = [];
    },
  },
});

export const { addBookmark, deleteBookmark, clearBookmark } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;

export const getCurrentBookmarkQuantitybyId = (id) => (state) =>
  state.bookmark.bookmarkList.find((item) => item.id === id)?.bookmark ?? false;
