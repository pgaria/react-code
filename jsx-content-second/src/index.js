// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component with the Function
const App = function(){
  return <div>Hello World!!</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
