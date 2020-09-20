

//challenge
const app = {
    title: 'Indecision App',
    subtitle: 'What do you want to do?',
    options: []
};

//list out the option in the array, list form.
function getOptions(options) {

    if (options) {
        return options.map(opt => ( 
            <li key={opt}> {opt} </li>)
        );
    }
}

const onFormSubmit = (e) => {
    //previous default, full-page refreshing
    e.preventDefault();
    
    const newOption = e.target.elements.option.value;

    if(newOption){
        app.options.push(newOption);
        e.target.elements.option.value = '';
        RenderApp();
    }
};

//clear the list and start over
const clearList = () => {

    app.options = [];748
    RenderApp();
};

const makeDecision = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    const selected = app.options[rand];
    alert(selected);
}



//JSX - Ja74script XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
const RenderApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
    
            {(app.subtitle && app.subtitle != '') && <h3> {app.subtitle}</h3>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options:' : 'No options available'}</p>
            <button disabled={app.options.length == 0} onClick={makeDecision}>What Should I Do</button>
            <button onClick={clearList}>Remove All Items</button>
            <ol> {getOptions(app.options)} </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

//initial render
const appRoot = document.getElementById('app');
RenderApp();
