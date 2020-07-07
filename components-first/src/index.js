import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// Write some JSX then Parenthesis (); for the return
//To show the Componeent we ae not goign to use the {} like how we refer variables and methods. But Consider the component as the part like <CommentDetail>
const App = () => {
  return (
    
    <div className ="ui container comments">
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
    </div>

  );
}

ReactDOM.render(<App />,document.querySelector('#root'));
