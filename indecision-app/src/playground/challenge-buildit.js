
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

        this.setState((prevState) => {
            return {
                toggleVis: !prevState.toggleVis
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
