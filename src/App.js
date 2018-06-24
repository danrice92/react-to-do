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
      ]
    };
    // Defines the initial state as an object
    // The state object can be accessed anywhere in the class
  }
  render() {
    return (
      <div className="App">
        <ul>
          {/* The curly braces around the `.map()` call tells JSX to evaluate the code as JavaScript */}
          { this.state.todos.map( (todo, index) =>
            // `.map()` runs through the array of todos and renders it into HTML
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
            // `ToDo` tells React we're generating two ToDo props: `todo.description` and `todo.isCompleted` 
            // We assign `index` as a value for `key` to give each child of the array a unique value
            // React needs this unique value to distinguish between elements properly
          )}
        </ul>
      </div>
    );
  }
}

export default App;
