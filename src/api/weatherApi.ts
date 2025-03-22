import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, API_KEY } from "../constants/apiConstants";

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;