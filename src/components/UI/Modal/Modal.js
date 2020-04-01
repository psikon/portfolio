import React from 'react';

import './Modal.css';

const modal = (props) => {
    return (
        <div className="modal__outer" onClick={props.onClick}>
            <div className="modal centered modal__open">
                <p>{props.text}</p>
                <button className="btn-primary modal_close" onClick={props.onClick}>Close</button>
            </div>
     </div>
    )
}

export default modal;