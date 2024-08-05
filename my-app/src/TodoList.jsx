import React from 'react'
import TodoCard from './TodoCard.jsx'

export default function TodoList(props) {
    const {todos} = props 
  return ( 
    <ul className = "main"> 
        {/*Passing todo list prop onto todocard to format */}
        {todos.map((todo,todoIndex) => {
            return(
                <TodoCard {...props} key={todoIndex} index = {todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
            
        })}
    </ul>
  )
}