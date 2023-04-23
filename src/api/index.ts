import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IWeather } from "../models/IWeather"
import { ICustomError } from "../models/ICustomError"

export const weatherApi = createApi({
     reducerPath: "weatherApi",
     tagTypes: ['weather'],
     baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_CURRENT_WEATHER_URL }),
     endpoints: builder => ({
          getWeatherByLocation: builder.query<IWeather, string>({
               query: (location) => {
                    return {
                         url: '',
                         params: { key: import.meta.env.VITE_KEY, q: location }
                    }
               },
               providesTags: ['weather'],
               transformErrorResponse: (response: ICustomError, meta, arg) => response.data.error
          })
     })
})

export const { useGetWeatherByLocationQuery } = weatherApi