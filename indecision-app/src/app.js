

//challenge
const appObj = {
    title: 'Indecision App',
    subtitle: 'new paragraph title',
    options: ['one', 'two']
};

function getOptions(options) {

    if(options) {
        return (
        <ol>
            {options.map(opt => (
                <li key = {opt}>
                    {' ' + opt}
                </li>
            ))}
        </ol>
    );
    }
}


//JSX - Ja74script XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
const template = (
    <div> 
        <h1>{appObj.title.toUpperCase()}</h1> 

        {(appObj.subtitle && appObj.subtitle != '') && <p> {appObj.subtitle + '!'}</p> }
        <p>{appObj.options && appObj.options.length > 0 ? 'Here are your options:' : 'No options available'}</p>
        {getOptions(appObj.options)}

    </div>

);

const user = {
    name: 'akclifto',
    age: 34,
    loc: 'Arizona'
};

function getLocation(loc){

    if(loc){
        return <p>Location: {loc}</p>;
    }
}

//first challenge
//use of ternary, logical AND and function call
const templateTwo = (

    <div>
        <h1>{user.name ? user.name : 'Anon'}</h1>
        {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
        {getLocation(user.loc)}
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);