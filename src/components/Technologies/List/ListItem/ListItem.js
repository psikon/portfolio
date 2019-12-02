import React from 'react';

import './ListItem.css'

const listItem = (props) => {
    return (
        <div>
           {props.item}
        </div>
    )
}

export default listItem;