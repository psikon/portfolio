import React from 'react';

import './TimeLine.css'
import TimeLineItem from './TimeLineItem/TimeLineItem';

const timeLine = (props) => {
    return (
        <div className="timeline-wrapper">
            <ul className="timeline-container">
                {props.items.map(item => (
                        <TimeLineItem key={item.id} item={item} german={props.german}/>
                    )
                )}
            </ul>
        </div>
            
  )};

export default timeLine;
       
  

    