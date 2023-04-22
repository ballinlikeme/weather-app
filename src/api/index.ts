import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IWeather } from "../models/IWeather"
import { ICustomError } from "../models/ICustomError"

export const weatherApi = createApi({
     reducerPath: "weatherApi",
     tagTypes: ['weather'],
     baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1/current.json" }),
     endpoints: builder => ({
          getWeatherByLocation: builder.query<IWeather, string>({
               query: (location) => {
                    return {
                         url: '',
                         params: { key: "e5ab2fae382d43498f7180356231204", q: location }
                    }
               },
               providesTags: ['weather'],
               transformErrorResponse: (response: ICustomError, meta, arg) => response.data.error
          })
     })
})

export const { useGetWeatherByLocationQuery } = weatherApi