import React from 'react';

const Action = (props) => (

    <div>
        <button 
            className="big-button"
            onClick={props.makeDecision}
            disabled={!props.hasOptions}
        >
            I will choose your fate
        </button>
    </div>

);

export default Action;