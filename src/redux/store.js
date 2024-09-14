import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campers/campersSlice";
import { filtersReducer } from "./filters/filtersSlice";
import { favoriteCampersReducer } from "./favoriteCampers/favoriteCampersSlice";

const persistConfig = {
  key: "favoriteCampers",
  storage,
};

const persistedFavoriteReducer = persistReducer(
  persistConfig,
  favoriteCampersReducer
);

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favoriteCampers: persistedFavoriteReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);