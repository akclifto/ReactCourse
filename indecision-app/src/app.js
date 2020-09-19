

//challenge
var appObj = {
    title: 'Indecision App',
    subtitle: 'new paragraph title'
};


//JSX - Javascript XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
var template = (
    <div> 
        <h1>{appObj.title.toUpperCase()}</h1> 
        <p> {appObj.subtitle + '!'}</p>  
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>

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
var templateTwo = (

    <div>
        <h1>{user.name + '!'}</h1>
        <p> Age: {user.age} </p>
        <p> Location: {user.loc} </p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);