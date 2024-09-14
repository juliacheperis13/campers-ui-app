import {
  selectSelectedType,
  selectSelectedEquipment,
  selectLocation
} from "../filters/filtersSelectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectSelectedType, selectSelectedEquipment, selectLocation],
  (campers, types, equipments, location) => {
    return campers.filter((camper) => {
      const isLocationMatched = !location?.trim().length || camper.location.toUpperCase().includes(location.trim().toUpperCase());

      console.log(location, camper.location)

      if (!isLocationMatched) {
        return;
      }

      const isTypeMatched =
        !types.length || types.some(({ value }) => value === camper.form);

      if (!isTypeMatched) {
        return;
      }

      const isEquipmentMatched =
        !equipments.length ||
        equipments.every(({ value }) =>
          value === "automatic" || value === "manual"
            ? camper.transmission === value
            : camper[value] === true
        );

      return isEquipmentMatched;
    });
  }
);
