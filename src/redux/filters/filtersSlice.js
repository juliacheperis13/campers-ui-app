import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipmentList: [],
  typeList: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    applyFilters: (state, action) => {
      const { typeList, equipmentList, location } = action.payload;
      state.typeList = typeList.filter((item) => item.isSelected);
      state.equipmentList = equipmentList.filter((item) => item.isSelected);
      state.location = location;
    },
    resetFilters: () => initialState,
  },
});

export const { resetFilters, applyFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
