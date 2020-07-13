@Author: Pawan Garia

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About:
This project is an example for learning and crating an example app for the user evernts like entering text, clicking on the textfiled forms etc. and then we have to get the list of Images for example and how to display them in the page using the multiple react componenets. This is the Version 1 where we just display the List with out any Styling.

## Learn about:
Learn about User Events and Fetching Lists with multiple React component.

### Challenge for this App V1.
1. Getting a Search Text from the User.
2. Use the Text entered by User and Do an API call to an Open Service and Fetch the Data.
3. Taking the Response data from the service and Display the List on the Screen.

## Steps:

### Getting the Location of the user from Browser??
In Our Index.js we are going to create a JavaScript Class with following :

1.State : with Latitude and Error message

2.Implement componentDidMount() method of Life Cycle and Do the Data Loading Part and get the Latitude usign following API
using API : https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
Imp : In the method above we use the setState({object}) method to set the state and then the render method clalled everytime.

3.Create a Render() method which is a must for the Class Components in React. Return a JSX based on the Season Logic.

### Getting the Date and Month??
We create a funcational Component SessionView which receives the Season is a property from our App Class.
In the Logic we can get the month using Java Script method : new Date().getMonth()

### Create the logic based on the month and Location then fill the component??
Create seasonConfig which stores the Configuration data About the  Icon CSS Class and the Text Message to Display.

SeasonView Component then Return a nice JSX based on the Logic for Winters or Summers season.

## CSS StyleSheet Reference
Using the https://semantic-ui.com for the CSS styleSheet.
https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"


## Final Result
Give Permission on the Browser Or you will see the loading Component.

![final Result by the project](./public/final-result.PNG)   


## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.