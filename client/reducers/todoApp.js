const initialState = {
  id: 123,
  text: 'Hej',
  completed: false
};

export default (state = [initialState], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case 'UPDATE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {});
        }

        return todo;
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}