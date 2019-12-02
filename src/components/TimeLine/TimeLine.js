import React from 'react';

import './TimeLine.css'
import TimeLineItem from './TimeLineItem/TimeLineItem';

const timeLine = (props) => {
    return (
            <ul className="timeline-container">
                {props.items.map(item => (
                        <TimeLineItem key={item.id} item={item} german={props.german}/>
                    )
                )}
            </ul>
  )};

export default timeLine;
       
  

    