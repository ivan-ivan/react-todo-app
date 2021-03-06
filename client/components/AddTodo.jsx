import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue() {
    return this.textInput.value;
  }

  addTodo(e) {
    if (!this.textInput.value) {
      return;
    }

    if (e.type === 'click' || e.charCode === 13) {
      this.props.addTodo({
        id: Math.random(),
        text: this.getInputValue()
      });

      this.textInput.value = null;
      this.textInput.focus();
    }

    this.isButtonDisabled();
  }

  isButtonDisabled() {
    if (this.textInput === undefined) {
      return true;
    }

    this.textInput.value ? false : true;
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
        <button type="button" disabled={this.isButtonDisabled()} onClick={this.addTodo} >Add a todo</button>
      </section>
    );
  }
}