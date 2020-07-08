import React from 'react';
import faker from 'faker';

// Create a Componenet now starting as Const....
// This is also a new Function if you say.
// Name of the Componeent file and the Cont Name should be same.
// Reaceiving the Properities from from The App in prop and then using the Prop variable.
const CommentDetail = prop => {
  console.log(prop);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={prop.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {prop.author}
        </a>
        <div className="metadata">
          <span className="date">{prop.timeStamp}</span>
        </div>
        <div className="text">{prop.comment}</div>
      </div>
    </div>
  );

};

//Need to Export the Componenet always to show that other files can use this Componenet in the nesting.
export default CommentDetail;