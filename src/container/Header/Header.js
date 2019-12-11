import React from 'react';

import HeaderComponent from '../../components/Header/HeaderComponent';

const Header = (props) => {
    const welcome = (props.german) ? "Willkommen zu meinem Portfolio" : "Welcome to my portfolio";
    const more = (props.german) ? "Weiterlesen" : "Read more";
    const title = (props.german) ? "Dr. rer. nat. Bioinformatiker" : "Dr. rer. nat. Bioinformatic";
    const githubUrl = "https://github.com/psikon";
    const linkedInUrl ="https://www.linkedin.com/in/philipp-hennersdorf-282033104/"
    const xingUrl = "https://www.xing.com/profile/Philipp_Hennersdorf/cv?sc_o=mxb_p"
    return <HeaderComponent 
        welcome={welcome}
        title={title}
        more={more}
        github={githubUrl}
        linkedIn={linkedInUrl}
        xing={xingUrl}/>

}

export default Header;