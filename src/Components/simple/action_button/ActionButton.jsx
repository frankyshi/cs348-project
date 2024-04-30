import './ActionButton.css'
import React from 'react'
import PropTypes from 'prop-types'

// Button w/ label and does action
const ActionButton = ({ label, action }) => {
    let className = "";
    if (label === 'Add' || label === 'Edit' || label === 'Delete') {
        className += label + ' crud';
    }
    if (label === 'X') {
        className = 'exit'
    }

    return (
        <div>
            <button className={className} onClick={action}>{label}</button>
        </div>
    );
}

ActionButton.propTypes = {
    label: PropTypes.string,
    action: PropTypes.func,
};

export default ActionButton