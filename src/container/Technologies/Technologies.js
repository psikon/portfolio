import React from 'react';

import './Technologies.css';
import Matrix from '../../components/Technologies/Matrix/Matrix';
import List from '../../components/Technologies/List/List';

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
        {item: "Eclipse e4 SWT", skill: 4}
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
        <section id="technologies">
            <div className="Technologies">
                <h2 className="technologies-header">Technologies</h2>
                <Matrix label="Languages" items={data.languages}/> 
                <Matrix label="Frameworks" items= {data.framework} /> 
                <List label="Databases" items= {data.databases} />
                <List label="Build and Deploy" items= {data.deploy} />
                <List label="Software" items= {data.software} />
                <List label="Operating Systems" items= {data.operationSystems} />
                <List label="IDE" items= {data.ide} />
                <List label="Version Control" items= {data.vs} />
            </div>
            <div>
                <h2 className="technologies-header">Skills</h2>
            </div>
            <div>
                <h2 className="technologies-header">Languages</h2>
            </div>
        </section>
    );
}

export default technologies;