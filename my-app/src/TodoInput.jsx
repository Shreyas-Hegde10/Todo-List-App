import { useState } from "react";

export default function TodoInput (props) {
    const { handleAddTodos, todoValue, setTodoValue } = props // Destructuring props

    // Function that is used to set the value of the todo to user entry
    function handleTodoValueChange(e) {
        setTodoValue(e.target.value)
    }
    return(
        <header>
            <input placeholder = "Enter todo.." value ={todoValue} onChange={handleTodoValueChange}/> 
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>
                Add
            </button>
        </header>
    );
}