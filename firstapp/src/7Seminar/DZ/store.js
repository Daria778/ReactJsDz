import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import { tasksSlice } from "./Slice.js"



export const store = configureStore({
    reducer: {
        middle: tasksSlice
    }
})

