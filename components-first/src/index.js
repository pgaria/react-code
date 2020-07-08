import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Write some JSX then Parenthesis (); for the return
//To show the Componeent we ae not goign to use the {} like how we refer variables and methods. But Consider the component as the part like <CommentDetail>
const App = () => {
  return (

    <div className="ui container comments">
      <ApprovalCard/>
      <CommentDetail image={faker.image.avatar()} author="Sam" timeStamp="Today at 4 PM" comment="This is Sam Posting" />
      <CommentDetail image={faker.image.avatar()} author="Alex" timeStamp="Todday at 3 PM" comment="This is Alex Posting" />
      <CommentDetail image={faker.image.avatar()} author="Max" timeStamp="Yesterday at 5 PM" comment="This is Max Posting" />
    </div>

  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
