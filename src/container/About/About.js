import React from 'react';

import './About.css';
import picture from '../../resources/me.jpg'
import AboutImage from '../../components/About/AboutImage';
import AboutText from '../../components/About/AboutText';

const de = {
    caption: "Philipp Hennersdorf",
    heading: "Über mich",
    paragraph_1: "Hallo, mein Name ist Philipp. Meine ersten Programmiererfahrungen machte ich vor vielen Jahren in meiner Schulzeit. Während meines Studiums der Bioinformatik habe ich angefangen erste kleinere Studentenprojekte in Java umzusetzen, sowie grundlegende Kenntnisse über Algorithmen- und Datenbankdesign zu erwerben. Am Ende des Studiums wurde die Analyse von riesigen genetischen Datensätzen mein favorisiertes Tätigkeitsfeld. In meiner anschließenden Zeit als Doktorant konnte ich mein bestehendes Wissen noch um die Sprachen R und Python erweitern um die riesigen Datenmengen zu bewältigen.",
    paragraph_2: "Nach vier Jahren als Vollzeit Doktorant konzentrierte ich mich auf die Tätigkeit, welche mir am meisten Spaß gemacht hatte und wurde Software Entwickler. Dabei konnte ich mein bestehenden Wissen, vor Allem in der Javaentwicklung, beträchtlich erweitern und lernte viel über zusätzliche Werkzeuge, welche als moderner Java Entwickler benötigt werden.",
    paragraph_3: "Für die Zukunft bin ich immer auf der Suche nach neuen interessierten Tätigkeitsfeldern.",
    paragraph_4: "Wenn Ihnen mein Portfolio gefällt, kontaktieren Sie mich doch.",
    signature: "Mit freundlichen Grüßen,\n Philipp Hennersdorf",
}
const en = {
    heading: "About me",
    paragraph_1: "Hi, I'm Philipp. I started my first programming experiences dozens of years ago. During my study of bioinformatic I began to learn Java for tiny student projects, as well as basic knowledge in algorithm and database design. At the end of study the analysis of huge genetic dataset became one of my favorite fields of activity. As a doctoral researcher I expanded my knowledge with R and Python for a better handling of the increasing amount of data.",
    paragraph_2: "After four years I stopped my time as a full-time doctoral researcher and switched my focus to become a Software Developer. I could greatly expand my knowledge, mainly around Java development, and learned a lot about additional tools, that are needed as a modern Java Developer.",
    paragraph_3: "For the future I'm looking for interesting fields of activity.",
    paragraph_4: "I encourage you to read my portfolio and contact me.",
    signature: "Sincerely,\nPhilipp Hennersdorf",
}

const about = (props) => {
    const text = props.german ? 
        <AboutText 
            heading={de.heading} 
            paragraph_1={de.paragraph_1} 
            paragraph_2={de.paragraph_2}
            paragraph_3={de.paragraph_3}
            paragraph_4={de.paragraph_4}
            signature={de.signature}/> :
        <AboutText 
            heading={en.heading} 
            paragraph_1={en.paragraph_1} 
            paragraph_2={en.paragraph_2} 
            paragraph_3={en.paragraph_3} 
            paragraph_4={en.paragraph_4} 
            signature={en.signature} />
    return ( 
        <section className="dark-background" id="about">
        <div className="About">
            <div className="About row">
                <div className="col col-left">
                    <AboutImage className="picture" width="175" picture={picture} caption={de.caption} />
                </div>
                <div className="col col-right">
                    {text}
                </div>
            </div>

        </div>
        </section>
    )
}

export default about;