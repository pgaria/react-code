import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat, month) => {
 if(month>2 && month <9)
     return lat>0 ? "Summers" : "Winters";
  else 
     return lat>0 ? "Winters" : "Summers";   
};

const SeasonView = props => {
    console.log(props.lat);
    // As we recieved the Latitude here now we can make a logic and display the Season based on Lat and Month.
    //Just calling the getSeason method to get what is the Season right now
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season == 'Winters' ? 'Ahh Its Chilly Here' : ' Lets Hit the Beach';
    const icon = season == 'Winters' ? 'snowflake icon' : 'sun icon';
    
    // Based on the Season Returned we can put the logic of writing the Text based on season Value.
    return (
    <div> 
        <i className ={icon}/>
        <h1> Season Viewer: { text} </h1>
    </div>
    );

};

export default SeasonView;