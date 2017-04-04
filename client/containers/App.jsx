import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Todo } from '../components/Todo.jsx';
import AddTodo from '../components/AddTodo.jsx';
import  * as TodoActions from '../actions/actions';
import { Link } from 'react-router-dom';

const App  = ({ todoList, actions }) => (
    <div className="todo-app">
      <AddTodo addTodo={actions.addTodo} />
      <section className="main">
        <ul>
          {
            todoList.map(todo => (
              <Todo
                {...todo}
                toggleTodo={actions.toggleTodo}
                removeTodo={actions.removeTodo}
                key={todo.id}
              />
            ))
          }
        </ul>
      </section>
      <footer className="footer">
        <ul>
          <li><Link to="all">All</Link></li>
          <li><Link to="active">Active</Link></li>
          <li><Link to="completed">Completed</Link></li>
        </ul>
      </footer>
    </div>
);

const mapStateToProps = state => ({
  todoList: state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);