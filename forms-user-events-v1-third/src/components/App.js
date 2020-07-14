import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

//Convert the App to now Class Component.
class App extends React.Component {
    // Create a State to store the Array as the Imgaes are list from Resposne.
    state = {images : [] };

    // Create an Method which can be called when Submit as a call back and get the User text.
    // Now this method is Invoked from the Child componenet which pass the text Field Value. and We can Print and see.
    // Why Async : Using the async Keyword in the method as method makes an Ajax api call and we want to await and capture the Response..
    // We can use the then() chaining as well after the get call and read the response.
    // Imp : Because of the Issue with this. keyword we have to use the => method for proper initialization or we get the error.
    runMeWhenSearchSubmit = async (userText) =>
    {
      console.log('Running the API request for :'+ userText);
      const response = await axios.get('https://api.unsplash.com/search/photos',{
          params: {query: userText},
          headers:{
              Authorization: 'Client-ID vOCj8-taNb5WXTlgTiLHbWLQgGvU2IEHkLW4UiIxMWM'
          }
      });

      console.log(response.data.results);
      this.setState({images : response.data.results});
    }

    render() {
        return (<div className="ui container">
            <SearchBar onSubmitByUser={this.runMeWhenSearchSubmit} />
            <h1> Found Images: {this.state.images.length}</h1>
        </div>);
    };

}

export default App;