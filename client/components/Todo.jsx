import React from 'react';

export const Todo = ({ text, removeTodo, id }) => (
  <li>
    <span>{ text }</span>
    <button 
      type="button"
      onClick={() => removeTodo(id)}
    >
    remove
    </button>
  </li>
);