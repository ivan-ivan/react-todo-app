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
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}