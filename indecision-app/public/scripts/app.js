'use strict';

//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'Here is some paragraph text.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);

var myName = 'Adam';
var age = 34;
var loc = 'Arizona';

//first challenge
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        myName.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        ' Age: ',
        age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Location: ',
        loc,
        ' '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
