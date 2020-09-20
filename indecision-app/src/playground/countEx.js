
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'some unchanging thing'
        };
    }

    handleAdd() {

        this.setState((prevState) => {
            
            return {
               count: prevState.count + 1
            };

        });

        //don't do this, won't render component
        // this.state.count++;
        // console.log(this.state);
    }

    handleMinus() {

        if(this.state.count <= 0){
            return this.state.count;
        }
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }
    
    handleReset() {

        this.setState(() => {
            return {
                count : 0
            }
        });

        //testing asyng with the preferred methods, gives expected output.
        // this.setState((prevState) => {
        //     return {
        //         count : prevState.count + 1
        //     }
        // });

        //this shows problems with async setState -> gives undesired output.
        // this.setState({
        //     count : 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    render() {

        return (

            <div>
            {this.state.name}
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAdd}>+ 1</button>
            <button onClick={this.handleMinus}>- 1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>

        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));










// let count = 0;

// const addOne = () => {
//     count++;
//     console.log('addOne', count);
//     //refresh screen
//     RenderCounterApp();
// };

// const minusOne = () => {

//     if (count <= 0) {
//         count = 0;
//     } else {
//         count--;
//     }
//     console.log('minusOne', count);
//     // refresh
//     RenderCounterApp();
// };

// const resetButton = () => {
//     count = 0;
//     console.log('resetButton', count);
//     //refresh
//     RenderCounterApp();
// }

// const challenge = (

//     <div>
//         <h1>Challenge Buttons: {count}</h1>
//         <p>
//             <button onClick={addOne} > + 1</button>
//         </p>
//         <p>
//             <button onClick={minusOne}> - 1</button>
//         </p>
//         <p>
//             <button onClick={resetButton}> Reset </button>
//         </p>
//     </div>
// );

// const RenderCounterApp = () => {
//     //uncommon to have onClick arrow funct within the <button>, use funct references.       
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne} >+1</button>
//         <button onClick={minusOne} >-1</button>
//         <button onClick={resetButton} >Reset</button>
//         </div>
//         );
//         ReactDOM.render(templateTwo, appRoot);
//     };
    
//     //init app
// const appRoot = document.getElementById('app');
// RenderCounterApp();