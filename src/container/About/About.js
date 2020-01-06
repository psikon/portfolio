import React from 'react';

import './About.css';
import picture from '../../resources/me.jpg'
import AboutImage from '../../components/About/AboutImage';
import AboutText from '../../components/About/AboutText';
import {translations_de} from '../../resources/translations_de';
import {translations} from '../../resources/translations';


const about = (props) => {
    const text = props.german ? 
        <AboutText 
            heading={translations_de.about.heading} 
            paragraph_1={translations_de.about.paragraph_1} 
            paragraph_2={translations_de.about.paragraph_2}
            paragraph_3={translations_de.about.paragraph_3}
            paragraph_4={translations_de.about.paragraph_4}
            signature={translations_de.about.signature}/> :
        <AboutText 
            heading={translations.about.heading} 
            paragraph_1={translations.about.paragraph_1} 
            paragraph_2={translations.about.paragraph_2} 
            paragraph_3={translations.about.paragraph_3} 
            paragraph_4={translations.about.paragraph_4} 
            signature={translations.about.signature} />
            
    return ( 
        <section className="dark-background" id="about">
        <div className="About">
            <div className="About row">
                <div className="col-left">
                    <AboutImage className="picture" picture={picture} caption={translations.general.name} />
                </div>
                <div className="col-right">
                    {text}
                </div>
            </div>

        </div>
        </section>
    )
}

export default about;