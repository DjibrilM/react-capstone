import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";
import currencyReducer from "./currencies/currencies";

const store = configureStore({
    reducer: {
        ui: uiSlice,
        currency: currencyReducer
    }
})

export default store
