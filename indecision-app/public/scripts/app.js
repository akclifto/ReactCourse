'use strict';

//challenge
var appObj = {
    title: 'Indecision App',
    subtitle: 'new paragraph title'
};

//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        ' ',
        appObj.subtitle + '!'
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

var user = {
    name: 'akclifto',
    age: 34,
    loc: 'AZ'
};

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
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        ' Age: ',
        user.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' Location: ',
        user.loc,
        ' '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
