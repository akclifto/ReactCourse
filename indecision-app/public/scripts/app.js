'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleMinus = _this.handleMinus.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: 0,
            name: 'some unchanging thing'
        };
        return _this;
    }

    //on load, retrieve stored data


    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            try {
                var json = localStorage.getItem('count');
                var count = JSON.parse(parseInt(json, 10));

                if (count !== this.state.count) {
                    this.setState(function () {
                        return { count: count };
                    });
                }
            } catch (e) {
                console.log("Caught invalid JSON data.");
                // do nothing
            }
        }
        //on state change, save stored data

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {

            if (prevState.count !== this.state.count) {
                var json = JSON.stringify(this.state.count);
                localStorage.setItem('count', json);
                console.log("saving data");
            }
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd() {

            this.setState(function (prevState) {

                return {
                    count: prevState.count + 1
                };
            });

            //don't do this, won't render component
            // this.state.count++;
            // console.log(this.state);
        }
    }, {
        key: 'handleMinus',
        value: function handleMinus() {

            if (this.state.count <= 0) {
                return this.state.count;
            }
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {

            this.setState(function () {
                return {
                    count: 0
                };
            });

            //testing asyng with the preferred methods, gives expected output.
            // this.setState((prevState) => {
            //     return {
            //         count : prevState.count + 1
            //     }
            // });

            //this shows problems with async setState -> gives undesired output.
            // this.setState({
            //     count : 0
            // });
            // this.setState({
            //     count: this.state.count + 1
            // });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                this.state.name,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAdd },
                    '+ 1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinus },
                    '- 1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     console.log('addOne', count);
//     //refresh screen
//     RenderCounterApp();
// };

// const minusOne = () => {

//     if (count <= 0) {
//         count = 0;
//     } else {
//         count--;
//     }
//     console.log('minusOne', count);
//     // refresh
//     RenderCounterApp();
// };

// const resetButton = () => {
//     count = 0;
//     console.log('resetButton', count);
//     //refresh
//     RenderCounterApp();
// }

// const challenge = (

//     <div>
//         <h1>Challenge Buttons: {count}</h1>
//         <p>
//             <button onClick={addOne} > + 1</button>
//         </p>
//         <p>
//             <button onClick={minusOne}> - 1</button>
//         </p>
//         <p>
//             <button onClick={resetButton}> Reset </button>
//         </p>
//     </div>
// );

// const RenderCounterApp = () => {
//     //uncommon to have onClick arrow funct within the <button>, use funct references.       
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne} >+1</button>
//         <button onClick={minusOne} >-1</button>
//         <button onClick={resetButton} >Reset</button>
//         </div>
//         );
//         ReactDOM.render(templateTwo, appRoot);
//     };

//     //init app
// const appRoot = document.getElementById('app');
// RenderCounterApp();
