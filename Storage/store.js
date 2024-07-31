import { configureStore, createReducer } from "@reduxjs/toolkit";
import categoryApi from "../Apis/categoryApi";
import vehicleApi from "../Apis/vehicleApi";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      vehicleApi.middleware
    ),
});
