import { useSelector } from "react-redux"

const ProductList = () => {
    const { productList } = useSelector((state) => state.products)
    return (
        <ul>
            {productList.map((i) => {
                <li>{i}</li>
            })}
        </ul>
    )
}
export default ProductList