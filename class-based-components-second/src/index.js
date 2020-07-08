import React from 'react';
import ReactDOM from 'react-dom';

// // React Class Based component  => Print and use the Geolocation API to Get the Position.
// With a render() method and Extending the Class to React.component class.
class App extends React.Component {
    
    //In React the constructor needs to be called its not a default lie java ScriptProcessorNode.
    constructor(props){
        super(props);
        this.state = {lat: null};
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //Call Set State always to change state.
                this.setState({lat: position.coords.latitude});
            },
            err => console.log(err)
           );
    }

    // React says we have to define the render() method. or rect will give error
   render(){
    
  return <div> Latitude :{this.state.lat} </div>;
    }
};

ReactDOM.render(<App/>,document.querySelector('#root'));