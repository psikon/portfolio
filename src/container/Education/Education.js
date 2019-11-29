import React from 'react';

import './Education.css';
import TimeLine from '../../components/TimeLine/TimeLine';
import HkiLogo from '../../resources/hki-logo.jpg'
import FsuLogo from '../../resources/fsu-logo.jpg'

export const data =[
    {
        name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
        destination: "Jena",
        time: "2012 - 2018",
        logo: HkiLogo,
        position:"Promotion: Bioinformatics",
        description: [
            "Specialisation: Metagenomics",
            "Thesis: Comparative metagenomics of selected marine organisms of the Indopacific."
        ]
    },
    {   
        name: "Friedrich Schiller University",
        destination: "Jena",
        time: "2007 - 2012",
        position: "Diploma Bioinformatician",
        logo: FsuLogo,
        description: [
            "Diploma thesis: Funktionelle Analyse der Genexpression in humanen B-Lymphomazellen"]
    }];

const education = () => {
    console.log(data)
    return (
        <section id="education" >
            <div className="Education">
                <h2 className="education-header">Education</h2>
                <TimeLine items={data} />
            </div>
        </section>
    )
}

export default education;