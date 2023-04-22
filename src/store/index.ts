import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userInputReducer } from "./slices/userInputSlice"
import { systemReducer } from "./slices/systemSlice"
import { weatherApi } from "../api"

const rootReducer = combineReducers({
     [weatherApi.reducerPath]: weatherApi.reducer,
     input: userInputReducer,
     system: systemReducer
})

export const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleWare) =>
          getDefaultMiddleWare().concat(weatherApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch