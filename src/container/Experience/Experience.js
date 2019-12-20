import React from 'react';

import './Experience.css';
import TimeLine from '../../components/TimeLine/TimeLine';
import EncowayLogo from '../../resources/encoway-logo.jpg';
import BrukerLogo from '../../resources/bruker-logo.jpg';
import HkiLogo from '../../resources/hki-logo.jpg';
import FsuLogo from '../../resources/fsu-logo.jpg';

export const data =[
    {
        id: 4,
        name: "encoway GmbH",
        destination: "Bremen",
        time_de: "2018 - heute",
        time_en: "2018 - now",
        position_de: "Software Entwickler",
        position_en:"Software Developer",
        logo: EncowayLogo,
        description_de: [
            "Frontend Entwicklung mit React",
            "Modifikation und Erweiterung einer bestenhenden Softwarelösung"
        ],
        description_en: [
            "Frontend devolopment with React",
            "Modification and Extension of Software"
        ]
    },
    {   
        id: 3,
        name: "Bruker Daltonik GmbH",
        destination: "Bremen",
        time_de: "2016 - 2018",
        time_en: "2016 -2018",
        position_de: "Software Entwickler",
        position_en: "Software Developer",
        logo: BrukerLogo,
        description_de: [
            "Entwicklung von Client-Server Lösungen",
            "Datenbankdesign und Implementierung",
            "Design und Implementierung von Eclipse e4 GUI's",
            "Testautomatisierung"
        ],
        description_en: [
            "Development of Client-Server Software",
            "Databasedesign and Development",
            "Design and Implementation of Eclipse e4 GUI's",
            "Testautomation"]
    },
    {   
        id: 2,
        name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
        destination: "Jena",
        time_de: "2012 - 2015",
        time_en: "2012 - 2015",
        position_de: "Wissenschaftlicher Mitarbeiter",
        position_en: "Doctoral Reasearcher",
        logo: HkiLogo,
        description_de: [
            "Biologische und statistische Auswertung von Genomsequenzdatensätzen",
            "Erstellung von wissentschaftlichen Publikationen",
            "Durchführung von Vorlesungen und Seminaren",
            "Betreuung von internationalen Masterstudenten"
        ],
        description_en: [
            "Biological and statistical analysis of sequencing data",
            "Preparation of scientific publications",
            "Performance of lectures and seminars",      
            "Supervision of master students"
        ]
    },
    {
        id: 1,
        name: "Friedrich Schiller University",   
        destination: "Jena",
        time_de: "2013 - 2015",
        time_en: "2013 - 2015",
        logo: FsuLogo,
        position_de: "Wissenschaftlicher Mitarbeiter",
        position_en: "Research assistant",
        description_de: ["Hilfestellung und Betreuung einer blinden Studentin"],
        description_en: ["Support for a visually handicapped student"]
    }];

const experience = (props) => {
    const title = props.german ? "Berufserfahrung" :"Experience";
    
    return (
        <section id="experience" className="dark-background">
            <div className="Experience ">
                <h2 className="section-header text-uppercase">{title}</h2>
                <TimeLine items={data} german={props.german}/>
            </div>
        </section>
    )
}

export default experience;