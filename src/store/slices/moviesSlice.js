import { createSlice } from "@reduxjs/toolkit";
import { resetLists } from "../actions";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const idx = state.indexOf(action.payload);
      state.splice(idx, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetLists, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;
