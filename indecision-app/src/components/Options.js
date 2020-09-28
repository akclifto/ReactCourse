import React from 'react';
import Option from './Option';


const Options = (props) => (
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
        <button 
            className="button button--link"
            onClick={props.handleDeleteOption}
        >
            Remove All
        </button>
    </div>
);

export default Options;