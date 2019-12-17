import React from 'react';

import MatrixLine from './MatrixLine/MatrixLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const matrix = (props) => {
    const skills = props.items.map(el => <MatrixLine key={el.item} label={el.item} skill={el.skill}/>);
    return (
        <div className="flex-item">
             <div className="row">
                <div className="col-25">
                    <span className="fa-layers fa-fw text-primary">
                        <FontAwesomeIcon className="primary-background circle" icon={faCircle} size="2x"/>
                        <FontAwesomeIcon style={{paddingLeft:props.offset}} icon={props.icon} size="lg" inverse transform="shrink-1"/>
                    </span>
                </div>
                <div className="col-75" > 
                    <h2 className="subsection-header text-uppercase text-left">{props.label}</h2>
                </div>
            </div>
            <table>
               <tbody>
                   {skills}
               </tbody>
            </table>
        </div>
    )
}

export default matrix