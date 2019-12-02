import React from 'react';

import './List.css';
import ListItem from './ListItem/ListItem'

const list = (props) => {
    return (
        <div>
            <h2>{props.label}</h2>
            {props.items.map(item => <ListItem german="true" item={item} />)}
        </div>);
    
}

export default list;