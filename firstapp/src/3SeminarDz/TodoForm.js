

const TodoForm = ({ setTodos }) => {
    let count = 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prev) => [...prev, { title: e.target.value, id: count }]);
        count += 1

        e.target.reset();
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
            </button>
        </form>
    );
}

export default TodoForm