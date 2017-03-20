import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Todo } from '../components/Todo.jsx';
import AddTodo from '../components/AddTodo.jsx';
import  * as TodoActions from '../actions/actions';

const App  = ({ todoList, actions }) => (
    <div className="todo-app">
      <AddTodo addTodo={actions.addTodo} />
      <section className="main">
        <ul>
          {
            todoList.map(todo => (
              <Todo
                {...todo}
                removeTodo={actions.removeTodo}
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