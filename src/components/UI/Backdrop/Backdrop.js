import React from 'react';

import './Backdrop.css'

const backdrop = (props) => {
    console.log(props.show)
    const backdrop = props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
    return backdrop
};

export default backdrop;