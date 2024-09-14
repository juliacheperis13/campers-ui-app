export const selectLocation = (state) => state.filters.location;

export const selectEquipmentList = (state) => state.filters.equipmentList;

export const selectTypeList = (state) => state.filters.typeList;

export const selectSelectedType = (state) =>
  state.filters.typeList.filter((item) => item.isSelected);

export const selectSelectedEquipment = (state) =>
  state.filters.equipmentList.filter((item) => item.isSelected);
