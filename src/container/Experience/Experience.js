import React from 'react';

import './Experience.css';
import TimeLine from '../../components/TimeLine/TimeLine';
import EncowayLogo from '../../resources/encoway-logo.jpg';
import BrukerLogo from '../../resources/bruker-logo.jpg';
import HkiLogo from '../../resources/hki-logo.jpg';
import FsuLogo from '../../resources/fsu-logo.jpg';

export const data =[
    {
        name: "encoway GmbH",
        destination: "Bremen",
        time: "2018 - now",
        position:"Software Developer",
        logo: EncowayLogo,
        description: [
            "test",
            "test"
        ]
    },
    {   
        name: "Bruker Daltonik GmbH",
        destination: "Bremen",
        time: "2016 - 2018",
        position: "Software Developer",
        logo: BrukerLogo,
        description: [
            "Development of Client-Server Software",
            "Databasedesign and Development",
            "Design and Implementation of Eclipse e4 GUI's",
            "Testautomation"]
    },
    {
        name: "Leibniz Institute for Natural Product Research and Infection Biology Hans-Knöll-Institute",
        destination: "Jena",
        time: "2012 - 2015",
        position: "Doctoral Reasearcher",
        logo: HkiLogo,
        description: [
            "Biological and statistical analysis of sequencing data",
            "Preparation of scientific publications",
            "Performance of lectures and seminars",      
            "Supervision of master students"
        ]
    },
    {
        name: "Friedrich Schiller University",   
        destination: "Jena",
        time: "2013 - 2015",
        logo: FsuLogo,
        position: "Research assistant",
        description: ["Support for a visually handicapped student"]
    }];

const experience = () => {
    console.log(data)
    return (
        <section id="experience" >
            <div className="Experience ">
                <h2 className="experience-header">Experience</h2>
                <TimeLine items={data} />
            </div>
        </section>
    )
}

export default experience;