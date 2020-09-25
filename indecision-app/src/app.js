import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header';
import Action from './components/Action';

/**
 * Component based JS app with React for Indecision-App 
 */


 // get ready for webpack usage.


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
            options : []
        };
    }

    //lifescycle components:  used to persist data or something over multiple pages (like a db)
    // does not work for stateless components, must be used with class components.
    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const jsonOptions = JSON.parse(json);
    
            if(jsonOptions){
                this.setState(() => ( {options : jsonOptions} ));
            }

        } catch (e) {
            console.log("Caught invalid JSON data. No change to functionality");
            // Do nothing.
        }

    }
    componentDidUpdate(prevProps, prevState) {
        //make sure the options state is change, then save
        if (prevState.options.length !== this.state.options.length) {
            //for now, store in local data, will convert to db later
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("Saving Data");
        } 
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




const Options = (props) => {
    return (
        <div>      
        {props.options.length === 0 && <p>Please add an option to get started.</p>}
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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
