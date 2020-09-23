'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component based JS app with React for Indecision-App 
 */

/**
 * Parent that holds all the main components
*/
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.makeDecision = _this.makeDecision.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveSingle = _this.handleRemoveSingle.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    //props only go from parent to child, no upstream.  must use functions
    //to handle any manip in child to parent.

    //reset options array.


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOption',
        value: function handleDeleteOption() {

            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'makeDecision',
        value: function makeDecision() {

            var rand = Math.floor(Math.random() * this.state.options.length);
            var selected = this.state.options[rand];

            return alert(selected);
        }
    }, {
        key: 'handleRemoveSingle',
        value: function handleRemoveSingle(optionToRemove) {

            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return 'Enter a valid value to add item.';
                //this checks to see if option is duplicate in array
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Item already exists in options';
            }

            this.setState(function (prevState) {
                return (
                    //concat prev state with new option to produce new array.
                    { options: prevState.options.concat(option) }
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'SkyNet has entered the chat';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    makeDecision: this.makeDecision
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOption: this.handleDeleteOption,
                    handleRemoveSingle: this.handleRemoveSingle
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

//challenge = convert class to stateless components for the simple classes.
var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.makeDecision,
                disabled: !props.hasOptions
            },
            'I will choose your fate'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.map(function (opt) {
            return React.createElement(Option, {
                key: opt,
                optText: opt,
                handleRemoveSingle: props.handleRemoveSingle
            });
        }),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOption },
            'Remove All'
        )
    );
};

var Option = function Option(props) {

    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleRemoveSingle(props.optText);
                }
            },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var newOption = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(newOption);

            //challenge change this set state to an implicit call
            this.setState(function () {
                return { error: error };
            });

            // this.setState(() => {
            //     return { error };
            // });

        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                ),
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
