import React from 'react';
import ReactDOM from 'react-dom';

// a Configuration to bring the constant logic out. 
// Icon Names are the Class Names from the Semantic UI CSS file we are using in the Index.html. So the Icons are used from there.
const seasonConfig = {
    Summers: {
        iconName: 'sun massive  icon',
        text: 'Lets Hit the Beach',
    },
    Winters: {
        iconName: 'snowflake massive icon',
        text: 'Ahh Its Chilly Here',
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9)
        return lat > 0 ? "Summers" : "Winters";
    else
        return lat > 0 ? "Winters" : "Summers";
};

const SeasonView = props => {
    console.log(props.lat);
    // As we recieved the Latitude here now we can make a logic and display the Season based on Lat and Month.
    //Just calling the getSeason method to get what is the Season right now
    const season = getSeason(props.lat, new Date().getMonth());
    //Pass the value of the Season to the SeasonConfig to get the icon and Text Value based on that.
    const { text, iconName } = seasonConfig[season];

    // Based on the Season Returned we can put the logic of writing the Text based on season Value.
    return (
        <div>
            <i className={ iconName} />
            <h1> Season Viewer: {text} </h1>
        </div>
    );

};

export default SeasonView;