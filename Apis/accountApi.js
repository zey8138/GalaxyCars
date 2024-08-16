import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://0a0e-31-206-0-60.ngrok-free.app/api/",
  }),

  endpoints: (builder) => ({
    CheckIsTrueUser: builder.mutation({
      query: (loginModel) => ({
        url: "Account/CheckIsTrueUser",
        method: "POST",
        body: loginModel,
      }),
    }),
  }),
});

export const { useCheckIsTrueUserMutation } = accountApi;
export default accountApi;
