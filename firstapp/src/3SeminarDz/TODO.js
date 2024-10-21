import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"


const TODO = () => {
    const [todos, setTodos] = useState([]);
    console.log(...todos);
    return (
        <div>
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} />
        </div>

    )
}
export default TODO