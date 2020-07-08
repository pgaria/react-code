import React from 'react';
import ReactDOM from 'react-dom';

// // React Class Based component  => Print and use the Geolocation API to Get the Position.
// With a render() method and Extending the Class to React.component class.
class App extends React.Component {
   render(){
    window.navigator.geolocation.getCurrentPosition(
     position => console.log(position),
     err => console.log(err)
    );
  return <div> Latitude : </div>;
    }
};

ReactDOM.render(<App/>,document.querySelector('#root'));