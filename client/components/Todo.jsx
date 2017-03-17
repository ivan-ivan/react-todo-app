import React from 'react';

export const Todo = ({ text, removeTodo, id }) => (
  <li>
    <span>{ text }</span>
    <button 
      type="button"
    >
    remove
    </button>
  </li>
);