import React from 'react';

import './Aboutme.css'
import me from '../../resources/me.jpg'
import AboutMeText from './AboutMeText';

const aboutme = (props) => {
    return (
        <section id="aboutme">
        <div className="AboutMe">
            <div className="image">
                <img className="picture" width="175" src={me} alt="Philipp Hennersdorf" />
            </div>
            <div>
                <AboutMeText german={props.german}/>
            </div>
        </div>
        </section>
    )
}

export default aboutme;
