import React from 'react';

export const Todo = ({ text, dispatch, id }) => (
  <li>{ text }
    <button 
      type="button"
      onClick={() => dispatch({
        type: 'DELETE_TODO',
        id
      })}
    >
    remove
    </button>
  </li>
);