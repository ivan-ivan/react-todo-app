import React from 'react';

export const Todo = ({ text, toggleTodo, removeTodo, id }) => {


  return (<li
      onClick={() => toggleTodo(id)}
    >
    <span>{ text }</span>
    <button
      type="button"
      onClick={() => removeTodo(id)}
    >
    remove
    </button>
  </li>)
};