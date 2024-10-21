import { ADD_PRODUCT } from "./actions";
const initialState = [];
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, { name: action.name.name }]
        default:
            return state
    }
}