import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: true,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    columnView(state, action) {
      state.view = action.payload;
    },
    listView(state, action) {
      state.view = action.payload;
    },
  },
});

export const { columnView, listView } = viewSlice.actions;

export default viewSlice.reducer;
