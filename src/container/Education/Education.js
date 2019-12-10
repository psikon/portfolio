import React from 'react';

import './Education.css';
import TimeLine from '../../components/TimeLine/TimeLine';
import HkiLogo from '../../resources/hki-logo.jpg'
import FsuLogo from '../../resources/fsu-logo.jpg'

export const data =[
    {
        id:2,
        name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
        destination: "Jena",
        time_de: "2012 - 2018",
        time_en: "2012 - 2018",
        logo: HkiLogo,
        position_de: "Promotion: Bioinformatik",
        position_en:"Promotion: Bioinformatics",
        description_de: [
            "Fachrichtung: Metagenomik",
            "Titel: Comparative metagenomics of selected marine organisms of the Indopacific."
        ],
        description_en: [
            "Specialisation: Metagenomics",
            "Thesis: Comparative metagenomics of selected marine organisms of the Indopacific."
        ]
    },
    {   
        id: 1,
        name: "Friedrich Schiller University",
        destination: "Jena",
        time_de: "2007 - 2012",
        time_en: "2007 - 2012",
        position_de: "Displom Bioinformatiker",
        position_en: "Diploma Bioinformatician",
        logo: FsuLogo,
        description_de: [
            "Diplomarbeit: Funktionelle Analyse der Genexpression in humanen B-Lymphomazellen" ],
        description_en: [
            "Diploma thesis: Funktionelle Analyse der Genexpression in humanen B-Lymphomazellen" ]
    }];

const education = (props) => {
    const title = (props.german) ? "Studium" : "Education";

    return (
        <section id="education" >
            <div className="Education">
                <h2 className="secction-header text-uppercase">{title}</h2>
                <TimeLine items={data} german={props.german}/>
            </div>
        </section>
    )
}

export default education;