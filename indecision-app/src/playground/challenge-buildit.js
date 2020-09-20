//build it challenge.  Section 3.  has some trouble getting content to display.
// was trying to do it in the function body, and not template at toggleIt body.
const details = {
    content: 'Hey. Here is the stuff you can now see on the screen!'
};

let isOpen = false;

const showDetails = () => {
    isOpen = !isOpen;
    renderApp();
};


const renderApp = () => {

    const toggleIt = (

        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetails}>
                {isOpen ? 'Hide Details' : 'Show Details'}
            </button>
            {isOpen && (
                <div>
                    <p>{details.content}</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(toggleIt, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();