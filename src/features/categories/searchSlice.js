import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "men's clothing",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchFilter(state, action) {
      state.search = action.payload.searchFilter((item) =>
        item.toLowerCase().includes(item)
      );
    },
    searchCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { searchFilter, searchCategory } = searchSlice.actions;

export default searchSlice.reducer;
