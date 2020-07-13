import React from 'react';

class SearchBar extends React.Component {
    
    //Create a method to read the Text user is making or event and refer this method in the onChange Attribute/CallBack function of the Input TAG below.
    //Means whenever the user input in our input Field this Method should be called. and this method receives and JS Event object property.
    onInputChange(event) {
     console.log(event.target.value);
    }



    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label> Image Search: </label>
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }


}

export default SearchBar;