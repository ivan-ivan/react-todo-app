import React from 'react';
import Todo from './Todo.jsx';
import AddTodo from './AddTodo.jsx';

export default class App extends React.Component {
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