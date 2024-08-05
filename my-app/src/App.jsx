import { useState, useEffect } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const[todos,setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

    // Function that is used to save todos onto the local storage whenever there is an addition/deletion of todos
    function persistData(newList) {
      localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }
    // Function that is used to add todos
    function handleAddTodos(newTodo) {
      const newTodoList = [...todos, newTodo]
      persistData(newTodoList)
      setTodos(newTodoList) 
      
    } 

    // Function that is used to delete todos
    function handleDeleteTodo(index) {
      const newTodoList = todos.filter((todo,todoIndex) => {
        return todoIndex !== index
      })
      persistData(newTodoList)
      setTodos(newTodoList)
    } 
    
    // Function that is used to edit todos 
    function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
    } 

    // Stores todos in local storage
    useEffect(() => {
      if (!localStorage) {
        return
      } 

      let localTodos = localStorage.getItem('todos') 
      if (!localTodos) {
        return
      } 

      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    },[] )

  return (
    <> 
      {/*Passing props */}
      <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos} /> 
      <TodoList handleDeleteTodo = {handleDeleteTodo} todos = {todos} handleEditTodo={handleEditTodo} /> 
    </>
  );
}

export default App