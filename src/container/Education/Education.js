import React from 'react';

import TimeLine from '../../components/TimeLine/TimeLine';
import {translations_de} from '../../resources/translations_de';
import {translations} from '../../resources/translations';

const education = (props) => {
    const title = (props.german) ? translations_de.education.label : translations.education.label;
    const data = (props.german) ? translations_de.education.data : translations.education.data;

    return (
        <section id="education" >
            <div className="Education">
                <h2 className="section-header text-uppercase">{title}</h2>
                <TimeLine items={data}/>
            </div>
        </section>
    )
}

export default education;