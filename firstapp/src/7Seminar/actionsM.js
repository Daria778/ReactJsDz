const INCREMENT = 'INCREMENT'
export const increment = () => ({
    count: INCREMENT
})
const initialState = 0;
export const middleRes = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: action.count += 1 }
        default:
            return state
    }
}