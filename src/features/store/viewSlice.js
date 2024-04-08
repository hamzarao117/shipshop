import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: true,
  darkTheme: false,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    columnView(state, action) {
      state.view = action.payload;
    },

    darkThemeActive(state, action) {
      state.darkTheme = action.payload;
    },
  },
});

export const { columnView, darkThemeActive } = viewSlice.actions;

export default viewSlice.reducer;
