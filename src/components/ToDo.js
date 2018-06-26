import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={ this.props.isCompleted }
          onChange={ this.props.toggleComplete }
        />
        <span>{ this.props.description }</span>
        <input
          type="submit"
          value="Delete"
          onClick={ this.props.deleteTodo }
        />
      </li>
      // Added input field for deleting a todo
      // Added the onClick listener that calls deleteTodo from props passed in by App.js
    );

  }
}

export default ToDo;
