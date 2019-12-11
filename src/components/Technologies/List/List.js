import React from 'react';

import './List.css';
import ListItem from './ListItem/ListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const list = (props) => {
    const icon = props.icon ? 
        <span className="fa-layers fa-fw text-primary">
            <FontAwesomeIcon className="primary-background circle" icon={faCircle} size="2x"/>
            <FontAwesomeIcon style={{paddingLeft:props.offset}} icon={props.icon} size="lg" inverse transform="shrink-1"/> :
        </span> : null;
    return (
        <div className="child container">
            <div className="row">
                <div className="col-25">
                    {icon}
                </div>
                <div className="col-75" >
                    <h2 className="subsection-header text-uppercase text-left">{props.label}</h2>
                </div>
            </div>
            {props.items.map(item => <ListItem key={item} german="true" item={item} />)}
        </div>);
    
}

export default list;