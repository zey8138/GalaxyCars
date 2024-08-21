import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const VehicleApi = createApi({
  reducerPath: "VehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://4f8b-31-206-0-60.ngrok-free.app/api/",
  }),
  tagTypes: ["vehicle"],
  endpoints: (builder) => ({
    GetAllVehicle: builder.query({
      query: () => ({
        url: "Vehicle/GetAllVehicle",
        method: "GET",
      }),
      providesTags: ["vehicle"],
    }),
    CreateVehicle: builder.mutation({
      query: (VehicleModel) => ({
        url: "Vehicle/CreateVehicle",
        method: "POST",
        body: VehicleModel,
      }),
      invalidatesTags: ["vehicle"],
    }),
    RemoveVehicle: builder.mutation({
      query: (VehicleId) => ({
        url: `Vehicle/DeleteVehicle/${VehicleId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vehicle"],
    }),
    UpdateVehicle: builder.mutation({
      query: (updateModel) => ({
        url: `Vehicle/UpdateVehicle/${updateModel.vehicleId}`,
        method: "PUT",
        body: updateModel.vehicleModel,
      }),
      invalidatesTags: ["vehicle"],
    }),
    GetVehicleById: builder.query({
      query: (vehicleId) => ({
        url: `Vehicle/Vehicle/${vehicleId}`,
        method: "GET",
      }),
      providesTags: ["vehicle"],
    }),
  }),
});

export const {
  useGetAllVehicleQuery,
  useCreateVehicleMutation,
  useRemoveVehicleMutation,
  useUpdateVehicleMutation,
  useGetVehicleByIdQuery,
} = VehicleApi;
export default VehicleApi;
