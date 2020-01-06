import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Footer.css"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXing } from '@fortawesome/free-brands-svg-icons'


const footerComp = (props) => {
    return (
        <div className="content" >
            <div className="text-center copyright">
                <p>Copyright &copy; {props.name}</p>
                <p>{props.update}</p>
                <p>Photo by Clément H on Unsplash</p>
            </div>
            <div className="list-inline text-center social-buttons">
                <ul>
                    <li className="list-inline-item text-center">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="lg"/>
						</a>
                    </li>
                    <li className="list-inline-item text-center">
                        <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
						</a>
                    </li>
                    <li className="list-inline-item text-center">
                        <a href={props.xing} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXing} size="lg"/>
                        </a>
                    </li>
                </ul>
            </div>
            <AnchorLink className="btn-primary" href="#header">{props.button}</AnchorLink>
        </div>
    )
}

export default footerComp;