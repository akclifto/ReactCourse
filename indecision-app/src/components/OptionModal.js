import React from 'react';
import Modal from 'react-modal';

//shorthand of the arrow function without the return() keyword because it is an inline return
const OptionModal = (props) => (

        <Modal
            appElement = {document.getElementById('app')}
            isOpen = {!!props.selectedOption}
            onRequestClose = {props.clearSelectedOption}
            contentLabel = "Selected Option"
        >
            <h3>Selected Option: </h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.clearSelectedOption} >
                Okay
            </button>
        </Modal>
    );

export default OptionModal;