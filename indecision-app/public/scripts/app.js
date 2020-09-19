'use strict';

console.log('App.js is running!');

//JSX - Javascript XML
var template = React.createElement(
  'h1',
  { id: 'someid' },
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
