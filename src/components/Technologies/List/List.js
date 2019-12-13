import React from 'react';

import './List.css';
import ListItem from './ListItem/ListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import DoubleListItem from './ListItem/DoubleListItem';

const list = (props) => {
    const icon = props.icon ? 
        <span className="fa-layers fa-fw text-primary">
            <FontAwesomeIcon className="primary-background circle" icon={faCircle} size="2x"/>
            <FontAwesomeIcon style={{paddingLeft:props.offset}} icon={props.icon} size="lg" inverse transform="shrink-1"/> :
        </span> : null;
    const label = props.label ? <h2 className="subsection-header text-uppercase text-left">{props.label}</h2> : null;
    const techList = props.tech ? <div className="list-item">{props.items.map(item => <ListItem key={item} item={item} />)}</div>: null;
    const skillList = props.skills ? <div className="skill-list">{props.items.map(item => <ListItem key={item} item={item} />)}</div>: null;
    const languageList = props.language ? <div className="double-list">{props.items.map(item => <DoubleListItem key={item.item} item={item.item} skill={item.skill} />)}</div> : null;
    return (
        <div className="child fixed-width">
            <div className="row">
                <div className="col-25">
                    {icon}
                </div>
                <div className="col-75" >
                    {label}
                </div>
            </div>
            {techList}
            {skillList}
            {languageList}
        </div>);
    
}

export default list;