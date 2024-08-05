import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props // Destructuring props
    return (
        <li className='todoItem' >
            {children} {/*Calling children prop to display all todos in a list*/}
            <div className='actionsContainer'>
                <button onClick={() => {
                   handleEditTodo(index) 
                }}>
                   <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}