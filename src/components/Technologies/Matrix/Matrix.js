import React from 'react';

import './Matrix.css'
import MatrixLine from './MatrixLine/MatrixLine';

const matrix = (props) => {
    const skills = props.items.map(el => <MatrixLine label={el.item} skill={el.skill}/>);
    return (
        <div>
            <table className="Matrix">
            <h2>{props.label}</h2>
                {skills}
            </table>
        </div>
    )
}

export default matrix