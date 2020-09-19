let count = 0;

const addOne = () => {
    count++;
    console.log('addOne', count);
    //refresh screen
    RenderCounterApp();
};

const minusOne = () => {

    if (count <= 0) {
        count = 0;
    } else {
        count--;
    }
    console.log('minusOne', count);
    // refresh
    RenderCounterApp();
};

const resetButton = () => {
    count = 0;
    console.log('resetButton', count);
    //refresh
    RenderCounterApp();
}

const challenge = (

    <div>
        <h1>Challenge Buttons: {count}</h1>
        <p>
            <button onClick={addOne} > + 1</button>
        </p>
        <p>
            <button onClick={minusOne}> - 1</button>
        </p>
        <p>
            <button onClick={resetButton}> Reset </button>
        </p>
    </div>
);

const RenderCounterApp = () => {
    //uncommon to have onClick arrow funct within the <button>, use funct references.       
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} >+1</button>
        <button onClick={minusOne} >-1</button>
        <button onClick={resetButton} >Reset</button>
        </div>
        );
        ReactDOM.render(templateTwo, appRoot);
    };
    
    //init app
const appRoot = document.getElementById('app');
RenderCounterApp();