export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo
});

export const removeTodo = id => ({
  type: 'DELETE_TODO',
  payload: id
});