

//challenge
const app = {
    title: 'Indecision App',
    subtitle: 'new paragraph title',
    options: []
};

function getOptions(options) {

    if (options) {
        return (
            <ol>
                {options.map(opt => (
                    <li key={opt}>
                        {' ' + opt}
                    </li>
                ))}
            </ol>
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

    app.options = [];
    RenderApp();

};

//JSX - Ja74script XML
//be sure to wrap expression in div if want adjacent elements, there can be only 1 root element
const RenderApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
    
            {(app.subtitle && app.subtitle != '') && <p> {app.subtitle + '!'}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options:' : 'No options available'}</p>
            
            <button onClick={clearList}>Remove All Items</button>
            <p>{app.options.length}</p>


            {getOptions(app.options)}
    
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
