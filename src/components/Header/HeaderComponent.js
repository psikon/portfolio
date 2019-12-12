import React from 'react';

import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXing } from '@fortawesome/free-brands-svg-icons'

const headerComp = (props) => {
    
    return (
        <section className="Header" id="home">
            <div className="Header">
                <p className="welcome">{props.welcome}</p>
                <h1 className="section-heading font-weight-bold title">Philipp Hennersdorf</h1>
                <h2 className="subsection-header font-weight-normal subtitle">{props.title}</h2>
                <AnchorLink className="btn-primary" href="#about">{props.more}</AnchorLink>
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
            </div>
        </section>
    )
}

export default headerComp;