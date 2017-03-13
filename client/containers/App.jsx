import React from 'react';
import Todo from '../components/Todo.jsx';
import AddTodo from '../components/AddTodo.jsx';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <AddTodo />
        <section className="section">
          <ul>
            {
              this.props.todoList.map(todo => (
                <Todo 
                  {...todo}
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