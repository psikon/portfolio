import React from 'react';

import './MatrixLine.css'

const skillMatrixLine = (props) => {
    let line = []

    for (var i = 0; i < 5; i++) {
        if (i <= props.skill) {
            line.push(<span className="circle-filled" />)
        } else {
            line.push(<span className="circle-empty" />)
        }
    }
    return (
        <tr className="skill-row">
            <td className="label-col">{props.label}</td>
            <td className="skill-col">{line.map(el=> el)}</td>
        </tr>)
}

export default skillMatrixLine;