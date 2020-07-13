import React from 'react';

class SearchBar extends React.Component {

    //Creating a State which can manage the Text Entered by the User.
    state = { userText: '' };
     
    //As Form by Default If Clicked Refresh the page which we do not want after eriting our Text in SearchBar.
    //So we Have to Prevent the Default Behaviour by making this custome method and call in Form Tag.
    onFormSubmit(event){
     event.preventDefault();
    }
    
    // Method no need to create in the onChange Event and can be Directly used with => expression.
    //Now we change and set the State in the controlled Elemenets as the Value is Stored by the Rect Componment not the HTML DOM.
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Image Search: </label>
                        < input type="text" value={this.state.userText} onChange={event => this.setState({ userText: event.target.value })} />
                    </div>
                </form>
            </div>
        );
    }


}

export default SearchBar;