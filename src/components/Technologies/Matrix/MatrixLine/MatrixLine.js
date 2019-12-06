import React from 'react';

import './MatrixLine.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const skillMatrixLine = (props) => {
    let line = []

    for (var i = 0; i < 5; i++) {
        if (i <= props.skill) {
            line.push(<span key={i} className="circle-filled" />)
        } else {
            line.push(<span key={i} className="circle-empty" />)
        }
    }
    return (
        <tr>
            <td><FontAwesomeIcon className="matrix-icon" icon={faCheckSquare} /></td>
            <td className="label-col">{props.label}</td>
            <td className="skill-col">{line.map(el=> el)}</td>
        </tr>)
}

export default skillMatrixLine;