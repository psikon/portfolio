import React from 'react';

import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const doubleListItem = (props) => {
    return (
        <div className="double-list-item">
            <FontAwesomeIcon className="list-icon" icon={faCheckSquare} />
            <p>{props.item} - {props.skill}</p> 
        </div>   
    )
}

export default doubleListItem;