import React from 'react';

//this component, we only need one thing, and we can put
//the export default right before the class definitions.
export default class AddOption extends React.Component {

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

        this.setState(() => ( {error} ));

        //clear input if there wasn't an error, there is not clear() function 
        if(!error) {
            e.target.elements.option.value = '';
        }


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