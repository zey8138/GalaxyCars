import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/jquery/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: () => ({}),
});
