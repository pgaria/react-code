import React from 'react';
import faker from 'faker';

// Create a Componenet now starting as Const....
// This is also a new Function if you say.
// Name of the Componeent file and the Cont Name should be same.
const CommentDetail =() => {

    return (
        <div className ="comment">
        <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
        </a>
         <div className ="content">
           <a href="/" className ="author">
            Sam
           </a>
              <div className="metadata">
                 <span className="date">Today at 6 :00 PM</span>
              </div>
              <div className="text">Nice blog Post</div>
         </div>    
       </div>
    );

};

//Need to Export the Componenet always to show that other files can use this Componenet in the nesting.
export default CommentDetail;