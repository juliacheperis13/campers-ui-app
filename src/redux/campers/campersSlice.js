import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

const toggleIsLoading = (state, value) => {
  state.isLoading = value;
};

const setError = (state, value) => {
  state.error = value;
};

const handleRejected = (state, action) => {
  setError(state, action.payload);
  toggleIsLoading(state, false);
};

const handlePending = (state) => {
  toggleIsLoading(state, true);
};

const handleFulfilled = (state) => {
  toggleIsLoading(state, false);
  setError(state, null);
};

const campersSlice = createSlice({
  name: "campers",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        handleFulfilled(state);
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
