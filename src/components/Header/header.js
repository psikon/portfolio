import React from 'react';

import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXing } from '@fortawesome/free-brands-svg-icons'

const header = (props) => {
    const welcome = (props.german) ? "Willkommen zu meinem Portfolio" : "Welcome to my portfolio";
    const more = (props.german) ? "Weiterlesen" : "Read more";

    return (
        <section className="Header" id="home">
            <div className="Header">
                <p className="welcome">{welcome}</p>
                <h1 className="section-heading font-weight-bold title">Philipp Hennersdorf</h1>
                <h2 className="subsection-header font-weight-normal subtitle">Dr. rer. nat.</h2>
                <AnchorLink className="btn-primary" href="#about">{more}</AnchorLink>
                <div className="list-inline text-center social-buttons">
                    <ul>
                        <li className="list-inline-item text-center">
                            <a href="https://github.com/psikon">
                                <FontAwesomeIcon icon={faGithub} size="lg"/>
							</a>
                        </li>
                        <li className="list-inline-item text-center">
                            <a href="https://www.linkedin.com/in/philipp-hennersdorf-282033104/">
                                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
							</a>
                        </li>
                        <li className="list-inline-item text-center">
                            <a href="https://www.xing.com/profile/Philipp_Hennersdorf/cv?sc_o=mxb_p">
                                <FontAwesomeIcon icon={faXing} size="lg"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default header;