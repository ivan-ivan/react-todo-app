import React from 'react';
import { Todo } from '../components/Todo.jsx';
import AddTodo from '../components/AddTodo.jsx';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { todoList, dispatch } = this.props;

    return (
      <div className="todo-app">
        <AddTodo dispatch={dispatch} />
        <section className="section">
          <ul>
            {
              todoList.map(todo => (
                <Todo 
                  {...todo}
                  dispatch={dispatch}
                  key={todo.id}
                />
              ))
            }
          </ul>
        </section>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    todoList: state
  };
}

export default connect(mapStateToProps)(App);