'use strict';

//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var template = React.createElement(
  'div',
  null,
  ' ',
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  ' ',
  React.createElement(
    'p',
    null,
    'Here is some paragraph text.'
  ),
  '  '
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
