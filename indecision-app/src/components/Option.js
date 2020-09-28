import React from 'react';

const Option = (props) => (

    <div className="option">
        <p className="option__text">
            {props.count}. {props.optText}
        </p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleRemoveSingle(props.optText)
            }}
        >
            Remove
            </button>
    </div>

);

export default Option;