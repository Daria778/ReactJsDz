const Item = ({ item }, { key }) => {
    return (
        <li id={item?.key} className="todo_item">
            <p>{item?.name}</p>
            <div className="todo_items_right">
                <button>
                    <span className="visually-hidden">Delete</span>
                </button>
            </div>
        </li>
    );
}
export default Item