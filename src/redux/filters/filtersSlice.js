import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipmentList: [],
    typeList: [],
    // allFilters: {
    //   location: "",
    //   equipmentList: [],
    //   typeList: [],
    // },
    // appliedFilters: {
    //   location: "",
    //   equipmentList: [],
    //   typeList: [],
    // },
  },
  reducers: {
    // setLocation: (state, action) => {
    //   state.allFilters.location = action.payload;
    // },
    // setEquipment: (state, action) => {
    //   state.allFilters.equipmentList = state.allFilters.equipmentList.map((equipment) => ({
    //     ...equipment,
    //     isSelected:
    //       equipment.value === action.payload
    //         ? !equipment.isSelected
    //         : equipment.isSelected,
    //   }));
    // },
    // setType: (state, action) => {
    //   state.allFilters.typeList = state.allFilters.typeList.map((equipment) => ({
    //     ...equipment,
    //     isSelected:
    //       equipment.value === action.payload ? !equipment.isSelected : false,
    //   }));
    // },
    // setEquipmentList: (state, action) => {
    //   state.allFilters.equipmentList = action.payload;
    // },
    // setTypeList: (state, action) => {
    //   state.allFilters.typeList = action.payload;
    // },
    applyFilters: (state, action) => {
      const { typeList, equipmentList, location } = action.payload;
      state.typeList = typeList.filter((item) => item.isSelected);
      state.equipmentList = equipmentList.filter((item) => item.isSelected);
      state.location = location;
    },
  },
});

export const {
  // setEquipmentList,
  // setEquipment,
  // setTypeList,
  // setType,
  // setLocation,
  applyFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
