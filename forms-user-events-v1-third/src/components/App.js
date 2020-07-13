import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

//Convert the App to now Class Component.
class App extends React.Component {
    
    // Create an Method which can be called when Submit as a call back and get the User text.
    // Now this method is Invoked from the Child componenet which pass the text Field Value. and We can Print and see.
    runMeWhenSearchSubmit(userText)
    {
      console.log(userText)
    }

    render() {
        return (<div className="ui container">
            <SearchBar onSubmitByUser={this.runMeWhenSearchSubmit} />
        </div>);
    }

}

export default App;