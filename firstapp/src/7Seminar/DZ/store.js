import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import { tasksSlice } from "./Slice.js"


const middlewareLog = applyMiddleware(logger)
export const store = configureStore({
    reducer: {
        middle: tasksSlice
    }
})

