const { divide } = require("lodash");

console.log('App.js is running!');

//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements
var template = <div><h1>Indecision App</h1> <p>This is some info</p> </div>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);