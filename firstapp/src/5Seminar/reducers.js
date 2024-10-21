const EXAMPLE_ACTION = "EXAMPLE_ACTION";
export const action = () => ({
    type: EXAMPLE_ACTION
})


const initialState = {
    theme: 'light'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        default:
            return state
    }
}