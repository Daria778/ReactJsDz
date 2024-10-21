const Item = ({ item }) => {
    return (
        <li id={item?.id} className="todo_item">
            <button><p>{item?.title}</p></button>
            <div className="todo_items_right">
                <button>
                    <span className="visually-hidden">Delete</span>
                </button>
            </div>
        </li>
    );
}
const TodoList = ({ todos }) => {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map((item, index) => <Item key={index} item={item} />)
            ) : (
                <p>Seems lonely in here, what are you up to?</p>
            )}
        </ol>
    );
}

export default TodoList;