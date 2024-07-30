import { configureStore, createReducer } from "@reduxjs/toolkit";
import categoryApi from "../Apis/categoryApi";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});
