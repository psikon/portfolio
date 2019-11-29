import React, {Component} from 'react';

import './TimeLine.css'
import TimeLineItem from './TimeLineItem/TimeLineItem';

class TimeLine extends Component {
    
    state = {
        left: false
    }

    togglePosition() {
        const position= !this.state.left;
        this.setState({left: position})
    }
    
    render() {
        
        const timeLine = 
        <ul className="timeline-container">
            {this.props.items.map(item => (
                    <TimeLineItem item={item} position={this.state.left}/>
                )
            )}
        </ul>
        return timeLine
    }
    
   
};

export default TimeLine;
       
  

    