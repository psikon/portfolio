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

const skills = [
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

const languages = [
    {item: "German", skill: "Native" },
    {item: "English", skill: "Fluent" },
    {item: "Spanish", skill: "Basic level"}]


const technologies = (props) => {
    return (
        <section id="technologies" className="light-background">
            <div className="Technologies">
                <h2 className="section-header text-uppercase">Technologies</h2>
                <div className="parent">
                    <Matrix className="child" label="Languages" items={data.languages} icon={faCode} offset="3px"/> 
                    <Matrix className="child" label="Frameworks" items= {data.framework} icon={faCog} offset="7px"/> 
                    <List className="child" label="Databases" items= {data.databases} icon={faDatabase} offset="8px"/>
                    <List className="child" label="Build and Deploy" items= {data.deploy} icon={faCogs} offset="2px"/>
                    <List className="child" label="Software" items= {data.software} icon={faWindowRestore} offset="5px"/>
                    <List className="child" label="Operating Systems" items= {data.operationSystems} icon={faDesktop} offset="5px"/>
                    <List className="child" label="Development Environment" items= {data.ide} icon={faCodepen} offset="5px"/>
                    <List className="child" label="Version Control" items= {data.vs} icon={faCodeBranch} offset="12px"/>
                </div>
            </div>
            <div>
                <h2 className="technologies-header text-uppercase">Skills</h2>
                <div>
                    <List className="child-skills" label="" items={skills} />
                </div>
            </div>
            <div>
                <h2 className="technologies-header text-uppercase">Languages</h2>
            </div>
        </section>
    );
}

export default technologies;