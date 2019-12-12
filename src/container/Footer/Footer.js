import React from 'react'

import Footer from '../../components/Footer/Footer';



const footer = (props) => {
    const buttonText = (props.german) ? "Seitenanfang" : "Page Top";
    const githubUrl = "https://github.com/psikon";
    const linkedInUrl ="https://www.linkedin.com/in/philipp-hennersdorf-282033104/";
    const xingUrl = "https://www.xing.com/profile/Philipp_Hennersdorf/cv?sc_o=mxb_p";
    const lastUpdate = 2019

    return (
        <section className="Footer" id="footer">
            <Footer 
                year={lastUpdate} 
                button={buttonText} 
                github={githubUrl} 
                linkedIn={linkedInUrl} 
                xing={xingUrl}/>
        </section>
    );
}

export default footer;