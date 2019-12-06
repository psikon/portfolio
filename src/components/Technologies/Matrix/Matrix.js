import React from 'react';

import './Matrix.css';
import MatrixLine from './MatrixLine/MatrixLine';

const matrix = (props) => {
    const skills = props.items.map(el => <MatrixLine key={el.item} label={el.item} skill={el.skill}/>);
    return (
        <div className="child">
            <h2 className="matrix-title">{props.label}</h2>
            <table>
               <tbody>
                   {skills}
               </tbody>
                
            </table>
        </div>
    )
}

export default matrix