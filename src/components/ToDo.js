import React, { Component } from 'react';
// Component requires curly braces because, unlike React, it is not the default export of `react`

class ToDo extends Component {
  // The component needs to extend React's `Component` class
  render() {
    // `return` returns JSX, React's syntax for defining HTML in JavaScript
    // Webpack parses JSX into plain JavaScript as it's bundled
    // Parentheses aren't always required, but they are often enough that you should use them anyway.
    // JSX tags need to either have a closing tag or be self-closing
    // `class` is an existing JS keyword, so JSX uses `className` instead
    // Must be only one root element that contains all other elements
    return (
      <li> A todo will go here </li>
    );
  }
}

export default ToDo;
