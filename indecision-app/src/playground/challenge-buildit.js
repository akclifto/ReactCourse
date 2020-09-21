
class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            name: 'Toggle Visibility',
            toggleVis: false,
            details: 'This is some text that was hidden!'
        };
    }


    handleToggleVisibility() {


        this.setState(() => {

            return {
                toggleVis: !this.state.toggleVis
            };

        });

    }

    render() {


        return (

            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.toggleVis ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.toggleVis && (
                    <div>
                        <p>{this.state.details}</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));



// //build it challenge.  Section 3.  has some trouble getting content to display.
// // was trying to do it in the function body, and not template at toggleIt body.
// const details = {
//     content: 'Hey. Here is the stuff you can now see on the screen!'
// };

// let isOpen = false;

// const showDetails = () => {
//     isOpen = !isOpen;
//     renderApp();
// };


// const renderApp = () => {

//     const toggleIt = (

//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>
//                 {isOpen ? 'Hide Details' : 'Show Details'}
//             </button>
//             {isOpen && (
//                 <div>
//                     <p>{details.content}</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(toggleIt, appRoot);
// };

// const appRoot = document.getElementById('app');
// renderApp();