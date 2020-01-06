import React from 'react';

import './TimeLineItem.css';

const timeLineItem = (props) => {

    return (
        <div className="timeline-item">

            <div className="timeline-item-content">
                <div className="timeline-header">
                    <p className="timeline-title">{props.item.time}</p>
                    <p className="timeline-subtitle">{props.item.name}, {props.item.destination}</p>
                    <p className="timeline-position"><strong>{props.item.position}</strong></p>
                </div>
                    <div className="timeline-body">
                        {props.item.description.map(el =>  
                            <p key={el} className="text-muted timeline-description">
                                {el}
                            </p>)
                        }
                    </div>
                    <div className="timeline-image">
                        <img className="image" src={props.item.logo} alt="hki logo"/>
                    </div>
                </div>
        </div>
    )
};

export default timeLineItem;