import { selectAppliedFilters } from "../filters/filtersSelectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectCamper = (state) => state.campers.item;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectAppliedFilters],
  (campers, filters) => {
    const { equipmentList, typeList, location } = filters;

    return campers.filter((camper) => {
      const isLocationMatched =
        !location.trim().length ||
        camper.location.toUpperCase().includes(location.trim().toUpperCase());

      if (!isLocationMatched) {
        return;
      }

      const isTypeMatched =
        !typeList.length ||
        typeList.some(({ value }) => value === camper.form);

      if (!isTypeMatched) {
        return;
      }

      const isEquipmentMatched =
        !equipmentList.length ||
        equipmentList.every(({ value }) =>
          value === "automatic" || value === "manual"
            ? camper.transmission === value
            : camper[value] === true
        );

      return isEquipmentMatched;
    });
  }
);
