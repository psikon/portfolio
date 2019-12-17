import React from 'react';

import './TimeLineItem.css';

const timeLineItem = (props) => {
    const time = (props.german) ? props.item.time_de :props.item.time_en;
    const position = (props.german) ? props.item.position_de : props.item.position_en;
    const description = (props.german) ?  
        props.item.description_de.map(el =>  
            <p key={el} className="text-muted timeline-description">
                {el}
            </p>) :
        props.item.description_en.map(el =>  
            <p key={el} className="text-muted timeline-description">
                {el}
            </p>);
            
    return (
        <div className="timeline-item">

            <div className="timeline-item-content">
                <div className="timeline-header">
                    <p className="timeline-title">{time}</p>
                    <p className="timeline-subtitle">{props.item.name}, {props.item.destination}</p>
                    <p className="timeline-position"><strong>{position}</strong></p>
                </div>
                    <div className="timeline-body">
                       {description}
                    </div>
                    <div className="timeline-image">
                        <img className="image" src={props.item.logo} alt="hki logo"/>
                    </div>
                </div>
        </div>
    )
};

export default timeLineItem;