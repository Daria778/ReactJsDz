import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers";

export const store = configureStore({
    reducer: {
        theme: profileReducer,
    }
})