import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options: </h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOption}
            >
                Remove All
            </button>
        </div>

        <div>
            {props.options.length === 0 && <p className="widget__msg">Please add an option to get started.</p>}
            {
                props.options.map((opt, index) =>
                    <Option
                        key={opt}
                        optText={opt}
                        count= {index + 1}
                        handleRemoveSingle={props.handleRemoveSingle}
                    />
                )
            }
        </div>
    </div>
);

export default Options;