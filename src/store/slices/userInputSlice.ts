import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserInputState {
     inputValue: string;
}

const initialState: UserInputState = {
     inputValue: ''
}

export const userInputSlice = createSlice({
     name: "userInput",
     initialState,
     reducers: {
          setInputValue(state, action: PayloadAction<string>) {
               state.inputValue = action.payload
          }
     }
})

export const { setInputValue } = userInputSlice.actions
export const userInputReducer = userInputSlice.reducer