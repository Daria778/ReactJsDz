import { store } from "./store";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { middleRes } from "./actionsM";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const MidleWarecomp = () => {
    const dispatch = useDispatch();
    const handle = () => {
        dispatch({ type: "INCREMENT" })
    }

    return (
        <div>
            <button onClick={handle}>click</button>
        </div>
    )
}
export default MidleWarecomp