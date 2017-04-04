import * as constants from '../constants/constants.js';

export const addTodo = todo => ({
  type: constants.ADD_TODO,
  payload: todo
});

export const removeTodo = id => ({
  type: constants.DELETE_TODO,
  payload: id
});

export const updateTodo = todo => ({
  type: constants.UPDATE_TODO,
  payload: todo
});

export const toggleTodo = id => ({
  type: constants.TOGGLE_TODO,
  payload: id
});