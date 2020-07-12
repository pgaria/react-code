import React from 'react';
import ReactDOM from 'react-dom';
import SeasonView from './SeasonView';
import Loading from './Loading';

// // React Class Based component  => Print and use the Geolocation API to Get the Position.
// With a render() method and Extending the Class to React.component class.
class App extends React.Component {
    //Removed the Constructor

    // Create 2 states Lat and error messages and fill at run time. Babel is anyways creating the constructor for us while compiling.
    // and initilizign the State for Us below.
    state = { lat: null, errorMessage: null };

    // Now Loading the Data in this method and removed from Constructor.
    //Calls for the Render method after that.
    componentDidMount() {
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
    componentDidUpdate() {
        console.log("Component  Did update");
    }

    // React says we have to define the render() method. or rect will give error
    // Adding the If condition to show Error or Latitude based on what is available and return.
    // Render method should be just used for returning the JSX only, not API calls like we do in constructor..
    // TIP : You can make a Method RenderContect() and place all this code and returns in there and just call this method below for better maintan code.
    render() {
        console.log("In Render");
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonView lat={this.state.lat} />;
        }
        // Return the Loading Component if WE wait for the User Permission on Browser.
        return <Loading message='Please accept the Location Request.' />;
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));