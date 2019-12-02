import React from 'react';
import classes from './Aboutme.css';

const de = () => {
    return (
        <div className = "text">
            <h2 className="about-title">Über mich</h2>
            <p> Hallo, mein Name ist Philipp. Meine ersten Programmiererfahrungen machte ich vor vielen 
            Jahren in meiner Schulzeit. Während meines Studiums der Bioinformatik habe ich angefangen 
            erste kleinere Studentenprojekte in Java umzusetzen, sowie grundlegende Kenntnisse über 
            Algorithmen- und Datenbankdesign zu erwerben. Am Ende des Studiums wurde die Analyse von 
            riesigen genetischen Datensätzen mein favorisiertes Tätigkeitsfeld. In meiner anschließenden 
            Zeit als Doktorant konnte ich mein bestehendes Wissen noch um die Sprachen R und Python 
            erweitern um die riesigen Datenmengen zu bewältigen.</p>

            <p>Nach vier Jahren als Vollzeit Doktorant konzentrierte ich mich auf die Tätigkeit, 
            welche mir am meisten Spaß gemacht hatte und wurde Software Entwickler. Dabei konnte ich 
            mein bestehenden Wissen, vor Allem in der Javaentwicklung, beträchtlich erweitern und lernte 
            viel über zusätzliche Werkzeuge, welche als moderner Java Entwickler benötigt werden.</p>


            <p>Für die Zukunft bin ich immer auf der Suche nach neuen interessierten Tätigkeitsfeldern.</p>

            <p>Wenn Ihnen mein Portfolio gefällt, kontaktieren Sie mich doch.</p>

            <p className="rightText">Mit freundlichen Grüßen,<br /> 
            Philipp Hennersdorf</p>
            </div>
    )
}

const en = () => {
    return (
        <div className={classes.text}>
            <h2>About me</h2>
            
            <p>Hi, I'm Philipp. I started my first programming experiences dozens of years ago. 
            During my study of bioinformatic I began to learn Java for tiny student projects, 
            as well as basic knowledge in algorithm and database design. At the end of study 
            the analysis of huge genetic dataset became one of my favorite fields of activity. 
            As a doctoral researcher I expanded my knowledge with R and Python for a better 
            handling of the increasing amount of data.</p>
                
            <p>After four years I stopped my time as a full-time doctoral researcher and 
            switched my focus to become a Software Developer. I could greatly expand my 
            knowledge, mainly around Java development, and learned a lot about additional 
            tools, that are needed as a modern Java Developer.</p>

            <p>For the future I'm looking for interesting fields of activity.</p>

            <p>I encourage you to read my portfolio and contact me.</p>

            <p>Sincerely,<br />
            Philipp Hennersdorf</p>
        </div>
    );
};

const aboutMeText = ( props) => {
    console.log(props.german)
    const text = (props.german) ? de() : en();
    return text;
}

export default aboutMeText;