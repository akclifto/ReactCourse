'use strict';

//challenge
var app = {
    title: 'Indecision App',
    subtitle: 'new paragraph title',
    options: []
};

//list out the option in the array, list form.
function getOptions(options) {

    if (options) {
        return options.map(function (opt) {
            return React.createElement(
                'li',
                { key: opt },
                ' ',
                opt,
                ' '
            );
        });
    }
}

var onFormSubmit = function onFormSubmit(e) {
    //previous default, full-page refreshing
    e.preventDefault();

    var newOption = e.target.elements.option.value;

    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = '';
        RenderApp();
    }
};

//clear the list and start over
var clearList = function clearList() {

    app.options = [];
    RenderApp();
};

//JSX - Ja74script XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var RenderApp = function RenderApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && app.subtitle != '' && React.createElement(
            'p',
            null,
            ' ',
            app.subtitle + '!'
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options:' : 'No options available'
        ),
        React.createElement(
            'button',
            { onClick: clearList },
            'Remove All Items'
        ),
        React.createElement(
            'ol',
            null,
            getOptions(app.options)
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                ' Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

//initial render
var appRoot = document.getElementById('app');
RenderApp();
