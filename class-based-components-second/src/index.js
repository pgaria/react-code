import React from 'react';
import ReactDOM from 'react-dom';

// // React Class Based component  => Print and use the Geolocation API to Get the Position.
// With a render() method and Extending the Class to React.component class.
class App extends React.Component {

    //In React the constructor needs to be called its not a default lie java ScriptProcessorNode.
    constructor(props) {
        super(props);
        console.log("In constructor");
        // Create 2 states Lat and error messages and fill at run time.
        this.state = { lat: null, errorMessage: null };
    }
    
    // Now Loading the Data in this method and removed from Constructor.
    //Calls for the Render method after that.
    componentDidMount(){
        console.log("My Component Rendered, in componentDidMount method");
        window.navigator.geolocation.getCurrentPosition(
            position =>
                //Call Set State always to change state.
                this.setState({ lat: position.coords.latitude }),
            err =>
                this.setState({ errorMessage: err.message })
        );
    }

    //Calls for the Render method after that.
    componentDidUpdate(){
        console.log("Component  Did update");
    }


    // React says we have to define the render() method. or rect will give error
    // Adding the If condition to show Error or Latitude based on what is available and return.
    // Render method should be just used for returning the JSX only, not API calls like we do in constructor..
    render() {
        console.log("In Render");
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