import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = this.state.todos.map(todo => { return todo })
    todos.push(todo)
    this.setState({todos})
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      // if key and value are the same, you can just use 'todos' instead of 'todos: todos' in ES6
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>

        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
