import React from 'react';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue() {
    return this.textInput.value;
  }

  addTodo(e) {
    if (e.type === 'click' || e.charCode === 13) {
      this.props.addTodo({
        id: Math.random(),
        text: this.getInputValue()
      });
      // this.props.addTodo();

      this.textInput.value = null;
      this.textInput.focus();
    }
  }

  render() {
    return (
      <section className="header">
        <input 
          type="text"
          placeholder="type a todo"
          ref={input => this.textInput = input}
          onKeyPress={this.addTodo}
        />
        <button type="button" onClick={this.addTodo}>Add a todo</button>
      </section>
    );
  }
}