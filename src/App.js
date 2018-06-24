import React, { Component } from 'react';
import './App.css';
// The `import` command pulls in a JavaScript entity that's `export`ed in another file.
// Webpack uses `import` to figure out what to bundle into the app.
import ToDo from './components/ToDo.js';
// Since ToDo.js exports itself, App.js can import it

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
    // Defines the initial state as an object
    // The state object can be accessed anywhere in the class
    // Values from text inputs, like newTodoDescription, are stored in state
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }
  // Accepts e, or event, as a variable
  // sets state of newTodoDescription, in the `this.state` description above, to e.target.value
  // e.target is the target element, the text input

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    // returns early if newTodoDescription is blank
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
  // preventDefault() prevents the default page reload that happens on a form submission
  // the newTodo const is set to newTodoDescription from state
  // isCompleted is set to false because a new todo item is not done when you make it
  // setState uses JavaScript's spread syntax, the [...this.state.todos, newTodo] to pass `setState` a new array
  // with the newTodo added to the end
  // the newTodoDescription is set to an empty array to clear the field onSubmit

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }
  // This is a class method/function
  // It creates a constant variable of the todos array, then uses the passed in index to pick the one that is changing state
  // Then, it uses a ternary operator to set isCompleted to true if its false and false if its true
  // Then it uses setState (it's bad practice to call `this.state` here) to set the state of everything in the array properly
  // In short, it toggles isCompleted between true and false when the checkbox is clicked

  render() {
    return (
      <div className="App">
        <ul>
          {/* The curly braces around the `.map()` call tells JSX to evaluate the code as JavaScript */}
          { this.state.todos.map( (todo, index) =>
            // `.map()` runs through the array of todos and renders it into HTML
            <ToDo
              key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
              toggleComplete={ () => this.toggleComplete(index) }
            />
            // `ToDo` tells React we're generating two ToDo props: `todo.description` and `todo.isCompleted`
            // We assign `index` as a value for `key` to give each child of the array a unique value
            // React needs this unique value to distinguish between elements properly
            // toggleComplete is now passed in as a prop to the ToDo component
            // broke the line up for readability
            // toggleComplete is passed in as an anonymous function, hence the `() =>`
            // This allows us to pass `(index)` in from the `.map` function
          )}
        </ul>
        {/* onSubmit is an arrow function that accepts e, or event, as a parameter */}
        {/* It then calls this.handleSubmit and passes it e */}
        {/* We use an arrow function to preserve the value of `this` */}
        {/* We could alternately bind `handleSubmit` in the constructor with `this.handleSubmit = this.handleSubmit.bind(this);` but that's lame */}
        {/* So we pass the method call in an arrow function so `this` is lexically scoped rather than dynamically scoped */}
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input
            type="text"
            value={ this.state.newTodoDescription }
            onChange={ (e) => this.handleChange(e) }
          />
          <input type="submit" />
          {/* This is a form for adding new to-do items */}
        </form>
      </div>
    );
  }
}

export default App;
