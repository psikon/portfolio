import React from 'react';

import './List.css';
import ListItem from './ListItem/ListItem'

const list = (props) => {
    return (
        <div className="child">
            <h2 className="list-title">{props.label}</h2>
            {props.items.map(item => <ListItem key={item} german="true" item={item} />)}
        </div>);
    
}

export default list;