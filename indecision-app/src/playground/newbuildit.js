
const content = {
    detail : 'This is the text that toggles!'    
};

let vis = false;

const toggleVis = () => {
    vis = !vis;
    render();
};

const render = () => {

    const deploy = (

        <div>
            <h1>Toggle Button</h1>
            <button onClick={toggleVis}>
            {vis ? 'Hide Details' : 'Show Details'}
            </button>
            {vis && (
                <p> {content.detail} </p>
            )}
            
        </div>

    );
    ReactDOM.render(deploy, document.getElementById('app'));
};

render();