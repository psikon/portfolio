import React from 'react';

import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const doubleListItem = (props) => {
    return (
        
        <div className="double-list-item">
            <span><FontAwesomeIcon className="list-icon" icon={faCheckSquare} /></span>
            <span>{props.item} - {props.skill}</span>
        </div>   
    )
}

export default doubleListItem;