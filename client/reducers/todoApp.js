import * as constants from '../constants/constants.js';

const initialState = {
  id: 123,
  text: 'Hej',
  completed: false
};

export default (state = [initialState], action) => {
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
    default:
      return state;
  }
}