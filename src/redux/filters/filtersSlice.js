import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    type: "",
    equipmentList: [],
    typeList: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setEquipment: (state, action) => {
      state.equipmentList = state.equipmentList.map((equipment) => ({
        ...equipment,
        isSelected:
          equipment.value === action.payload
            ? !equipment.isSelected
            : equipment.isSelected,
      }));
    },
    setType: (state, action) => {
      // state.type = action.payload;

      state.typeList = state.typeList.map((equipment) => ({
        ...equipment,
        isSelected:
          equipment.value === action.payload ? !equipment.isSelected : false,
      }));
    },
    setEquipmentList: (state, action) => {
      state.equipmentList = action.payload;
    },
    setTypeList: (state, action) => {
      state.typeList = action.payload;
    },
    applyFilters: (state, action) => {
      
    }
  },
});

export const { setEquipmentList, setEquipment, setTypeList, setType, setLocation } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
