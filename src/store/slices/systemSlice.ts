import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SystemState {
     current: boolean;
}

const initialState: SystemState = {
     current: false
}

const systemSlice = createSlice({
     name: "system",
     initialState,
     reducers: {
          changeSystem: (state) => {
               state.current = !state.current
          }
     }
})

export const { changeSystem } = systemSlice.actions
export const systemReducer = systemSlice.reducer