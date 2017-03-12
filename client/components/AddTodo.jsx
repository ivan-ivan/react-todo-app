import React from 'react';

export default class AddTodo extends React.Component {
  render() {
    return (
      <section className="header">
        <input type="text" placeholder="type a todo" />
        <button type="button" onClick={this.props.onClick}>Add a todo</button>
      </section>
    );
  }
}