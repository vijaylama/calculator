import React from 'react';
import './display-panel.css';

const DisplayPanel = (props) => {
    let { result } = props;
    return (
        <div className="display-panel" id="display">
            {result}
        </div>
    )
}

export default DisplayPanel;