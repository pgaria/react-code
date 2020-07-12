import React from 'react';


const Loading =(props) => {

    return (

        <div className="ui active dimmer">
          <div className="ui big text loader">{props.message}</div>
        </div>

    );
};

// Create a Default Prop or property for the Object if we forgot to send the Message to the component.
// So we will Just show the Default messages... Below.
Loading.defaultProps = {
    message: 'Loading......'
};

export default Loading;