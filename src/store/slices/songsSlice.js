import { createSlice } from "@reduxjs/toolkit";
import { resetLists } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
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

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
