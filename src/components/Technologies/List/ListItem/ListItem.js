import React from 'react';

import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const listItem = (props) => { 
    return (
        <div className="list">
             <span className="list-item">
                <FontAwesomeIcon className="list-icon" icon={faCheckSquare} />
                {props.item}
            </span>
        </div>
        
    )
}

export default listItem;