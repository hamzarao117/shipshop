import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const userSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchFilter(state, action) {
      state.search = action.payload.searchFilter((item) =>
        item.toLowerCase().includes(item)
      );
    },
  },
});

export const { searchFilter } = userSlice.actions;

export default userSlice.reducer;
