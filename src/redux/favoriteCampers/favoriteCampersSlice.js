import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favoriteCampers",
  initialState: {
    items: {},
  },
  reducers: {
    addFavoriteCamper: (state, action) => {
      state.items[action.payload] = true;
    },
    removeFavoriteCamper: (state, action) => {
      delete state.items[action.payload]
    },
  },
});

export const { addFavoriteCamper, removeFavoriteCamper } =
  favoritesSlice.actions;
export const favoriteCampersReducer = favoritesSlice.reducer;
