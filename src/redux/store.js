import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { campersReducer } from "./campers/campersSlice";
import { filtersReducer } from "./filters/filtersSlice";

const persistConfig = {
  key: "campers",
  storage,
};

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);