'use strict';

var _require = require("lodash"),
    divide = _require.divide;

console.log('App.js is running!');

//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  ' '
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
