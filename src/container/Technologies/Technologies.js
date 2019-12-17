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

const data = {
    languages: [
        {item: "Java", skill: 5},
        {item: "Python", skill: 3},
        {item: "React", skill: 3},
        {item: "R", skill: 4},
        {item: "VBScript", skill: 2}
    ],
    framework: [ 
        {item: "Spring", skill: 5},
        {item: "Hibernate", skill: 4},
        {item: "Eclipse e4", skill: 4}
    ],
    deploy: ["Maven","Jenkins","Bamboo","Docker"
    ],
    software: [
        "Micosoft Office",
        "Jira",
        "Confluence",
        "Sonar",
        "LaTex"
    ],
    databases: ["PostgreSQL","MySQL", "MSSQL"],
    operationSystems : ["Windows","Mac OSX","Linux"],
    vs: ["git", "svn"],
    ide: [ "Eclipse", "IntelliJ IDEA","VSCode","TestComplete","RStudio"]
}

const skills_en = [
    "Independence",
    "Solving problems by searching for information",
    "Desire to develop and expand knowledge",
    "Teamwork",
    "Structured working",
    "Perserverance in the pursiut of the target",
    "Responsibility",
    "Creativity",
    "Experience in agile development with SCRUM and Kanban"
]

const skills_de = [
    "Selbständige Arbeitsweise",
    "problemlösendes Denken",
    "hohe Lernbereitschaft",
    "Teamwork",
    "Strukturierte Arbeitsweise",
    "Ausdauernde Lösungssuche",
    "Verantwortungsvoll",
    "Kreativ",
    "Erfahrungen in Agilen Entwicklungsmethoden"
]

const languages_en = [
    {item: "German", skill: "Native" },
    {item: "English", skill: "Fluent" },
    {item: "Spanish", skill: "Basic level"}]

const languages_de = [
        {item: "Deutsch", skill: "Muttersprache" },
        {item: "Englisch", skill: "Fließend in Schrift und Wort" },
        {item: "Spanisch", skill: "Grundkenntnisse"}]


const technologies = (props) => {
    const programming = (props.german) ? "Programmier- sprachen" : "Programming Languages";
    const frameworks = (props.german) ? "Frameworks" : "Frameworks";
    const databases = (props.german) ? "Datenbanken" : "Databases";
    const software = (props.german) ? "Software" : "Software";
    const deploy = (props.german) ? "Build und Deployment" : "Build and Deploy";
    const os = (props.german) ? "Betriebs- systeme" : "Operating Systems";
    const ide = (props.german) ? "Entwicklungs- umgebungen" : "Development Environment";
    const vs = (props.german) ? "Versions- verwaltung" : "Version Control";
    const skills = (props.german) ? skills_de : skills_en;
    const languages = (props.german) ? languages_de : languages_en;

    return (
        <section id="technologies" className="light-background">
            <div className="Technologies">
                <h2 className="section-header text-uppercase">Technologies</h2>
                <div className="flex-container">
                    <Matrix label={programming} items={data.languages} icon={faCode} offset="3px"/> 
                    <Matrix label={frameworks} items= {data.framework} icon={faCog} offset="6px"/>
                    <List label={databases} items= {data.databases} icon={faDatabase} offset="8px" tech={true}/>
                    <List label={deploy} items= {data.deploy} icon={faCogs} offset="2px" tech={true}/>
                    <List label={software} items= {data.software} icon={faWindowRestore} offset="6px" tech={true}/>
                    <List label={os} items= {data.operationSystems} icon={faDesktop} offset="5px" tech={true}/>
                    <List label={ide} items= {data.ide} icon={faCodepen} offset="6px" tech={true}/>
                    <List label={vs} items= {data.vs} icon={faCodeBranch} offset="12px" tech={true}/>
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