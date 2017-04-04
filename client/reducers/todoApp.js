import * as constants from '../constants/constants.js';

export default (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case constants.UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...state, text: action.payload.text};
        }

        return todo;
      });
    case constants.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case constants.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return todo.completed = !todo.completed;
      });
    default:
      return state;
  }
}