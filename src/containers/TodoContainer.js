import React from 'react'

import TodoItem from '../components/TodoItem'

export default function TodoContainer({todos, deleteTodo}) {
  
  const showTodos = () => {
    return todos.map(todo => <TodoItem deleteTodo={deleteTodo} key={todo.id} {...todo}/>)
  }

  return (
    <ul className="todo-list">
      {showTodos()}
    </ul>
  )
}
