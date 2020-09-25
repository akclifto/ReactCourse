import React from 'react';

const Action = (props) => (

    <div>
        <button
            onClick={props.makeDecision}
            disabled={!props.hasOptions}
        >
            I will choose your fate
        </button>
    </div>

);

export default Action;