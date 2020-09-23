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
        this.handleRemoveSingle = this.handleRemoveSingle.bind(this);
        this.state = {
            options : props.options
        };
    }

    //lifescycle components:  used to persist data or something over multiple pages (like a db)
    // does not work for stateless components, must be used with class components.
    componentDidMount() {
        console.log("Fetching Data");
    }
    componentDidUpdate(prevProps, prevState) {

        console.log("Saving Data");
    }
    componentWillUnmount() {
        console.log("will unmount.");
    }

    

    //props only go from parent to child, no upstream.  must use functions
    //to handle any manip in child to parent.

    //reset options array.
    handleDeleteOption() {

        this.setState(() => ({ options: [] }));
    }

    makeDecision() {

        const rand = Math.floor(Math.random() * this.state.options.length);
        const selected = this.state.options[rand];
       
        return alert(selected);
    }

    handleRemoveSingle(optionToRemove) {

        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }) );
    }


    handleAddOption(option) {

        if(!option) {
            return 'Enter a valid value to add item.';
        //this checks to see if option is duplicate in array
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Item already exists in options';
        }

        this.setState((prevState) => ( 
            //concat prev state with new option to produce new array.
            {options : prevState.options.concat(option)} 
        )); 

    }

    render() {
        const subtitle = 'SkyNet has entered the chat';

        return (
            <div>
                <Header subtitle={subtitle}/>
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
                    handleRemoveSingle={this.handleRemoveSingle}
                />
            </div>
        );
    }
}


IndecisionApp.defaultProps = {
    options: []
};


//challenge = convert class to stateless components for the simple classes.
const Header = (props) => {

    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>

    );

};

Header.defaultProps = {
    title: 'Indecision'
};


const Action = (props) => {

    return (
        <div>
        <button 
        onClick={props.makeDecision}
        disabled={!props.hasOptions}
        >
        I will choose your fate
        </button>
    </div>

    );

};


const Options = (props) => {
    return (
        <div>                
        {
            props.options.map((opt) => 
                <Option 
                    key={opt} 
                    optText={opt} 
                    handleRemoveSingle={props.handleRemoveSingle}
                /> 
            )
        }
        <button onClick={props.handleDeleteOption}>Remove All</button>
        </div>
    );


};

const Option = (props) => {

    return (

        <div>
            Option: {props.optText}
            <button 
                onClick={(e) => {
                    props.handleRemoveSingle(props.optText)
                }}
            >
                Remove
            </button>
        </div>

    );

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

        //challenge change this set state to an implicit call
        this.setState(() => ( {error} ));

        // this.setState(() => {
        //     return { error };
        // });


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
