import React from 'react';

//this component, we only need one thing, and we can put
//the export default right before the class definitions.
export default class AddOption extends React.Component {

    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const newOption = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(newOption);

        this.setState(() => ( {error} ));

        //clear input if there wasn't an error, there is not clear() function 
        if(!error) {
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div>
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
                {this.state.error && 
                    <p className="add-option-error"> {this.state.error}</p> }
            </div>
        );
    }
}