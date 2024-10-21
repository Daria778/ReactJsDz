import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "./actions";

const Product = () => {
    const dispatch = useDispatch();
    const addProductdispatch = () => {
        dispatch(addProduct(value))
        setValue('')
    }
    const [value, setValue] = useState('');
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={addProductdispatch}></button>
        </div>
    )
}
export default Product