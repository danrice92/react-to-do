import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  deleteTodo(index) {
    const todos = this.state.todos.slice();
    const updatedTodoList = todos.filter(todo => todo !== todos[index]);
    this.setState({ todos: updatedTodoList });
  }
  // Created the deleteTodo function
  // It first creates an array of objects with `const todos` to iterate through
  // Since it is passed in an index on the component, we can remove the element at index `index` with todos.filter()
  // `todos.filter()` checks each todo item to see if it is equal to the index passed in, and if it is, it filters it out of the list
  // `setState` sets ToDo.todos to the newly updated list

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo
              key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
              toggleComplete={ () => this.toggleComplete(index) }
              deleteTodo={ () => this.deleteTodo(index) }
            />
            // The ToDo component is passed in an anonymous function, deleteTodo, just like toggleComplete, in props
            // This way, it does not need to be bound to state
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input
            type="text"
            value={ this.state.newTodoDescription }
            onChange={ (e) => this.handleChange(e) }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
