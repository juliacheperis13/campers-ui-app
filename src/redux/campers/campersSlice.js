import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./campersOps";

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
  initialState: { items: [], isLoading: false, error: null, item: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        handleFulfilled(state);
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.item = action.payload;
        handleFulfilled(state);
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
  reducers: {
    resetCamper: (state) => {
      state.item = null;
    },
    resetCampers: (state) => {
      state.items = [];
    },
  },
});

export const { resetCamper, resetCampers } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
