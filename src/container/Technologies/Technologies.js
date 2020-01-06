import React from 'react';

import './Technologies.css';
import Matrix from '../../components/Technologies/Matrix/Matrix';
import List from '../../components/Technologies/List/List';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import { faCogs} from '@fortawesome/free-solid-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { faWindowRestore} from '@fortawesome/free-solid-svg-icons'
import { faDesktop} from '@fortawesome/free-solid-svg-icons'
import { faCodepen} from '@fortawesome/free-brands-svg-icons'
import { translations_de } from '../../resources/translations_de';
import { translations } from '../../resources/translations';

const technologies = (props) => {
    const programming = (props.german) ? translations_de.technologies.label.programming : translations.technologies.label.programming;
    const frameworks = (props.german) ?  translations_de.technologies.label.frameworks : translations.technologies.label.frameworks;
    const databases = (props.german) ?  translations_de.technologies.label.databases : translations.technologies.label.databases;
    const software = (props.german) ?  translations_de.technologies.label.software : translations.technologies.label.software;
    const deploy = (props.german) ? translations_de.technologies.label.deploy : translations.technologies.label.deploy;
    const os = (props.german) ? translations_de.technologies.label.os : translations.technologies.label.os;
    const ide = (props.german) ? translations_de.technologies.label.ide : translations.technologies.label.ide;
    const vs = (props.german) ? translations_de.technologies.label.vs : translations.technologies.label.vs;
    const skills = (props.german) ? translations_de.technologies.skills : translations.technologies.skills;
    const languages = (props.german) ? translations_de.technologies.languages : translations.technologies.languages;

    return (
        <section id="technologies" className="light-background">
            <div className="Technologies">
                <h2 className="section-header text-uppercase">Technologies</h2>
                <div className="flex-container">
                    <Matrix label={programming} items={translations.technologies.programming} icon={faCode} offset="3px"/> 
                    <Matrix label={frameworks} items= {translations.technologies.framework} icon={faCog} offset="6px"/>
                    <List label={databases} items= {translations.technologies.databases} icon={faDatabase} offset="8px" tech={true}/>
                    <List label={deploy} items= {translations.technologies.deploy} icon={faCogs} offset="2px" tech={true}/>
                    <List label={software} items= {translations.technologies.software} icon={faWindowRestore} offset="6px" tech={true}/>
                    <List label={os} items= {translations.technologies.operationSystems} icon={faDesktop} offset="5px" tech={true}/>
                    <List label={ide} items= {translations.technologies.ide} icon={faCodepen} offset="6px" tech={true}/>
                    <List label={vs} items= {translations.technologies.vs} icon={faCodeBranch} offset="12px" tech={true}/>
                </div>
            </div>
            <div className="space">
                <h2 className="technologies-header text-uppercase">Skills</h2>
                <div className="parent">
                    <List items={skills} skills={true}/>
                </div>
            </div>
            <div className="space">
                <h2 className="technologies-header text-uppercase">Languages</h2>
                <div>
                    <List items={languages} language={true} />
                </div>
            </div>
        </section>
    );
}

export default technologies;