'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility(props) {
        _classCallCheck(this, Visibility);

        var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            name: 'Toggle Visibility',
            toggleVis: false,
            details: 'This is some text that was hidden!'
        };
        return _this;
    }

    _createClass(Visibility, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            var _this2 = this;

            this.setState(function () {

                return {
                    toggleVis: !_this2.state.toggleVis
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.name
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibility },
                    this.state.toggleVis ? 'Hide Details' : 'Show Details'
                ),
                this.state.toggleVis && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        this.state.details
                    )
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

// //build it challenge.  Section 3.  has some trouble getting content to display.
// // was trying to do it in the function body, and not template at toggleIt body.
// const details = {
//     content: 'Hey. Here is the stuff you can now see on the screen!'
// };

// let isOpen = false;

// const showDetails = () => {
//     isOpen = !isOpen;
//     renderApp();
// };


// const renderApp = () => {

//     const toggleIt = (

//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>
//                 {isOpen ? 'Hide Details' : 'Show Details'}
//             </button>
//             {isOpen && (
//                 <div>
//                     <p>{details.content}</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(toggleIt, appRoot);
// };

// const appRoot = document.getElementById('app');
// renderApp();
