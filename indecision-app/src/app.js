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
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
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
       
        return alert(selected);
    }


    handleAddOption(option) {

        if(!option) {
            return 'Enter a valid value to add item.';
        //this checks to see if option is duplicate in array
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Item already exists in options';
        }

        this.setState((prevState) =>{
            //concat prev state with new option to produce new array.
            return {
                options : prevState.options.concat(option)
            };
        });
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
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
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

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const newOption = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(newOption);

        this.setState(() => {
            return { error };
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p> }
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));