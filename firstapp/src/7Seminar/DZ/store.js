import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import { tasksSlice } from "./FetchSlice.js"



export const store = configureStore({
    reducer: {
        middle: tasksSlice
    }
})

