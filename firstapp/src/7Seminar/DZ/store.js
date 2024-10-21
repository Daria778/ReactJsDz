import { applyMiddleware, configureStore } from "@reduxjs/toolkit"

import { middleRes } from "./actionsM"

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: tasks }), 1000)
    );
});

const middlewareLog = applyMiddleware(logger)
export const store = configureStore({
    reducer: {
        middle: middleRes
    },
    middlewareLog
})