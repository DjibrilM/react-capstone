import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navigated: false
}

const uiSlice = createSlice({
    initialState: initialState,
    name: "UI",
    reducers: {
        goForward: (state) => {
            state.navigated = true;
        },
        goBack: (state) => {
            state.navigated = false
        }

    }
})

export const { goBack, goForward } = uiSlice.actions;
export const uiSelector = ((state) => state.ui);
export default uiSlice.reducer;
