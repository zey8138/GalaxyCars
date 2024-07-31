import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
  vehicleId: "",
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: initialState,
  reducers: {
    getAllVehicles: (state, action) => {
      state.vehicles = aciton.payload;
    },
  },
});

export const { getAllVehicles } = vehicleSlice.actions;

export const vehicleReducer = vehicleSlice.reducer;
