import React, { Component } from 'react';
import './App.css';
// removed the `import logo` command
// The `import` command pulls in a JavaScript entity that's `export`ed in another file.
// Webpack uses `import` to figure out what to bundle into the app.
import ToDo from './components/ToDo.js';
// Since ToDo.js exports itself, App.js can import it


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* removed boilerplate code */}
        <ul>
          <ToDo />
          <ToDo />
        </ul>
      </div>
    );
  }
}

export default App;
