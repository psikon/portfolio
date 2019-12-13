import React from 'react';

import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const listItem = (props) => { 
    return (
        <div className="list-item">
            <span><FontAwesomeIcon className="list-icon" icon={faCheckSquare}/></span>
            <span>{props.item}</span>       
        </div>
        
    )
}

export default listItem;