import React from 'react';

import TimeLine from '../../components/TimeLine/TimeLine';
import {translations_de} from '../../resources/translations_de';
import {translations} from '../../resources/translations';

const experience = (props) => {
    const title = props.german ? translations_de.experience.label : translations.experience.label;
    const data = props.german ? translations_de.experience.data : translations.experience.data;
    
    return (
        <section id="experience" className="dark-background">
            <div className="Experience ">
                <h2 className="section-header text-uppercase">{title}</h2>
                <TimeLine items={data}/>
            </div>
        </section>
    )
}

export default experience;