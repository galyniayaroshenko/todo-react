import React, { Component } from 'react';

class TodoCreator extends Component {
  state = {
    text: ''
  };

  handelChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handelAddTodo = () => {
    const todo = {
      id: Date.now(),
      text: this.state.text,
      completed: false
    };
    this.props.onAddTodo(todo);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <div>TodoCreator</div>
        <input
          value={this.state.text}
          type="text"
          onChange={this.handelChange}
          placeholder="What needs to be done?"
        />
        <button onClick={this.handelAddTodo}>Add</button>
      </div>
    );
  }
}

export default TodoCreator;
