import React from 'react';

const Option = (props) => (

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

export default Option;