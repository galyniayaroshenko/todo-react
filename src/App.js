import React, { Component } from 'react';
import './App.css';

import TodoCreator from './components/TodoCreator';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    todos: [],
    filter: false,
    isAdd: false
  };

  /* hooks */
  componentWillMount() {
    const localTodos = JSON.parse(localStorage.getItem('todos'));

    if (localTodos) {
      this.setState(Object.assign({}, this.state, { todos: localTodos }));
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.filter || nextState.isAdd) {
      const todos = JSON.stringify(nextState.todos);

      localStorage.setItem('todos', todos);
    }

    return true;
  }
  /* hooks */

  addTodo = (newTodo) => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    const newTodos = [...localTodos, newTodo];

    this.setState(Object.assign({}, this.state, { todos: newTodos, isAdd: true }));
  };

  handleFilter = (id) => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));

    switch(id) {
      case 'all': {
        this.setState(Object.assign(
          {},
          this.state,
          { todos: localTodos, filter: true, isAdd: false }
        ));

        break;
      }
      case 'completed': {
        const newTodos = localTodos.filter(item => {
          return item.completed;
        });

        this.setState(Object.assign(
          {},
          this.state,
          { todos: newTodos, filter: true, isAdd: false }
        ));

        break;
      }
      case 'active': {
        const newTodos = localTodos.filter(item => {
          return !item.completed;
        });

        this.setState(Object.assign(
          {},
          this.state,
          { todos: newTodos, filter: true, isAdd: false }
        ));

        break;
      }

      default: {
        console.log('I do not know this id');
      }
    }
  };

  handleList = (id) => {
    let newTodos = [];

    this.state.todos.forEach(item => {
      if (item.id === id) {
        newTodos.push(Object.assign({}, item, { completed: !item.completed }));
      } else {
        newTodos.push(item);
      }

      return newTodos;
    });

    this.setState(Object.assign({}, this.state, { todos: newTodos }));
  };

  render = () => {
    return (
      <div>
        <h2>Todo:</h2>
        <TodoCreator onAddTodo={this.addTodo}/>
        <TodoList onHandleList={this.handleList} todoList={this.state.todos} />
        <hr/>
        <Filter onHandleFilter={this.handleFilter} isAdd={this.state.isAdd}/>
      </div>
    );
  }
}

export default App;
