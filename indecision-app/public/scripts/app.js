'use strict';

//challenge
var appObj = {
    title: 'Indecision App',
    subtitle: 'new paragraph title',
    options: ['one', 'two']
};

function getOptions(options) {

    if (options) {
        return React.createElement(
            'ol',
            null,
            options.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    ' ' + opt
                );
            })
        );
    }
}

//JSX - Ja74script XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    appObj.subtitle && appObj.subtitle != '' && React.createElement(
        'p',
        null,
        ' ',
        appObj.subtitle + '!'
    ),
    React.createElement(
        'p',
        null,
        appObj.options && appObj.options.length > 0 ? 'Here are your options:' : 'No options available'
    ),
    getOptions(appObj.options)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
