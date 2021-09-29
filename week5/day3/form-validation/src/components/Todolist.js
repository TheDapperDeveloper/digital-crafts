import { useState } from "react";
import TodoItems from "./TodoItems";

function Todolist () {
    const [todoItem, setTodoItem] = useState("");
    const [todoList, setTodoList] = useState([])
        return (
        <div>
            <h1>To Do List</h1>
            <input onChange={(e) => setTodoItem(e.target.value)} type="text" placeholder="Add a to-do"/>
            <button onClick={() => setTodoList([...todoList, todoItem])}>Add ToDo</button>
        <TodoItems list={todoList}/>
        </div>
    )
}

export default Todolist;