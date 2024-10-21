import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Slicer";

export const store = configureStore({
    reducer: {
        products: productReducer,
    }
})