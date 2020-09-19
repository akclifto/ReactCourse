console.log('App.js is running!');

//JSX - Javascript XML
// var template = <p id="someid">This is JSX from app.js</p>;
var template = /*#__PURE__*/React.createElement("h1", {
    id: "someid"
  }, "This is JSX from app.js");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);