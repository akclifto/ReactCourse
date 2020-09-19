
//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var template = <div> <h1>Indecision App</h1> <p>Here is some paragraph text.</p>  </div>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);