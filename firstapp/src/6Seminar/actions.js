export const ADD_PRODUCT = "ADD_PRODUCT";
export const addProduct = (name) => ({
    type: ADD_PRODUCT,
    name: { name }
})