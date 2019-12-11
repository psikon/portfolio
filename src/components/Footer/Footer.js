import React from 'react';

import './Footer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXing } from '@fortawesome/free-brands-svg-icons'

const footerComp = (props) => {
    return (
        <div className="Footer">
            <div className="text-center">
                <p>Copyright &copy; Philipp Hennersdorf</p>
                <p>{props.year}</p>
                <p>Photo by Clément H on Unsplash</p>
            </div>
            <div className="list-inline text-center social-buttons">
                <ul>
                    <li className="list-inline-item text-center">
                        <a href={props.github}>
                            <FontAwesomeIcon icon={faGithub} size="lg"/>
						</a>
                    </li>
                    <li className="list-inline-item text-center">
                        <a href={props.linkedIn}>
                            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
						</a>
                    </li>
                    <li className="list-inline-item text-center">
                        <a href={props.xing}>
                            <FontAwesomeIcon icon={faXing} size="lg"/>
                        </a>
                    </li>
                </ul>
            </div>
            <AnchorLink className="btn-primary" href="#about">{props.more}</AnchorLink>
        </div>
    )
}

export default footerComp;