/**
 * Component based JS app with React for Indecision-App 
 */

 /**
  * Parent that holds all the main components
 */
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'SkyNext has entered the chat'
        const options = ['thing one','thing two','thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {

    //with react components, render always be called.
    render() {

        return (

            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>

        );
    }

}

class Action extends React.Component {

    handlePick() {
        console.log('handle pick clicked');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What would you like to do?</button>
            </div>

        );
    }
}

class Options extends React.Component {

    handleRemoveAll() {
        console.log('remove all clicked');
    }

    render() {
        // console.log(this.props.options);
        return (
            <div>                
            {
                this.props.options.map((opt) => 
                <Option key={opt} optText={opt} /> 
                )
            }
            <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (

            <div>
                Option: {this.props.optText}
            </div>

        );
    }
}

class AddOption extends React.Component {

    handleAddOption(e) {
        e.preventDefault();
        const newOption = e.target.elements.option.value.trim();
        if(newOption) {
            alert(`New Option: ${newOption}`);
        }
    }

    render() {
        return (

            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));