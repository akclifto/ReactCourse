
//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var template = (
    <div> 
        <h1>Indecision App</h1> 
        <p>Here is some paragraph text.</p>  
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>

);

var myName = 'Adam';
var age = 34;
var loc = 'Arizona';

//first challenge
var templateTwo = (

    <div>
        <h1>{myName.toUpperCase() + '!'}</h1>
        <p> Age: {age} </p>
        <p> Location: {loc} </p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);