/**
 * Component based JS app with React for Indecision-App 
 */

 /**
  * Parent that holds all the main components
 */
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.makeDecision = this.makeDecision.bind(this);
        this.state = {
            options : ['thing one','thing two','thing four']
        };
    }

    //props only go from parent to child, no upstream.  must use functions
    //to handle any manip in child to parent.

    //reset options array.
    handleDeleteOption() {

        this.setState(() => {
            return {
                options: []
            };
        });
    }

    makeDecision() {

        const rand = Math.floor(Math.random() * this.state.options.length);
        const selected = this.state.options[rand];

        console.log("decision clicked");
        
        return alert(selected);

    }


    render() {
        const title = 'Indecision';
        const subtitle = 'SkyNext has entered the chat';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    makeDecision={this.makeDecision}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
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

    render() {
        return (
            <div>
                <button 
                onClick={this.props.makeDecision}
                disabled={!this.props.hasOptions}
                >
                I will choose your fate
                </button>
            </div>

        );
    }
}

class Options extends React.Component {

    render() {
        // console.log(this.props.options);
        return (
            <div>                
            {
                this.props.options.map((opt) => 
                <Option key={opt} optText={opt} /> 
                )
            }
            <button onClick={this.props.handleDeleteOption}>Remove All</button>
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