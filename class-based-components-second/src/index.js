import React from 'react';
import ReactDOM from 'react-dom';

// // React Class Based component  => Print and use the Geolocation API to Get the Position.
// With a render() method and Extending the Class to React.component class.
class App extends React.Component {

    //In React the constructor needs to be called its not a default lie java ScriptProcessorNode.
    constructor(props) {
        super(props);
        // Create 2 states Lat and error messages and fill at run time.
        this.state = { lat: null, errorMessage: null };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //Call Set State always to change state.
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    // React says we have to define the render() method. or rect will give error
    render() {
       if(this.state.errorMessage && !this.state.lat){
           return <div> Error: {this.state.errorMessage} </div>;
       }    
       if(!this.state.errorMessage && this.state.lat){
           return <div> Latitude: {this.state.lat}</div>;
       }
       return <div>Loading</div>;
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));