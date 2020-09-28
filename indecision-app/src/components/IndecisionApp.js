import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'
import OptionModal from './OptionModal';


/**
  * Parent that holds all the main components
 */
export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined 
    };


    //props only go from parent to child, no upstream.  must use functions
    //to handle any manip in child to parent.

    //reset options array.
    handleDeleteOption = () => {

        this.setState(() => ({ options: [] }));
    };

    //remove a single option from the list.
    handleRemoveSingle = (optionToRemove) => {

        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }) );
    };

    //clear the selected option to hide the modal popup
    clearSelectedOption = () => {
        this.setState(() => ( { selectedOption : undefined }));
    };

    //select an option from the list at random
    makeDecision = () => {

        const rand = Math.floor(Math.random() * this.state.options.length);
        const selected = this.state.options[rand];
       
        //set the selected option for the modal
        this.setState(() => ({
            selectedOption: selected
        }) );
    };


    //add an option from the list when input by user. 
    handleAddOption = (option) => {

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

    };


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
    
    //build in function - save date from appl to localStorage
    componentDidUpdate(prevProps, prevState) {
        //make sure the options state is change, then save
        if (prevState.options.length !== this.state.options.length) {
            //for now, store in local data, will convert to db later
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("Saving Data");
        } 
    }

    //this fires when you close out the app, you wont see this log on the screen.
    componentWillUnmount() {
        console.log("will unmount.");
    }

    render() {
        const subtitle = 'Beepboop Beepboop will control your destiny';

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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption = {this.clearSelectedOption}
                />
            </div>
        );
    }
}
