import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import { logger } from "./Logger"
import { middleRes } from "./actionsM"


const middlewareLog = applyMiddleware(logger)
export const store = configureStore({
    reducer: {
        middle: middleRes
    },
    middlewareLog
})