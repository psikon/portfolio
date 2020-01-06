import React from 'react';

import HeaderComponent from '../../components/Header/HeaderComponent';
import {translations_de} from '../../resources/translations_de';
import {translations} from '../../resources/translations';
import { GITHUB_REPO, LINKED_IN, XING} from '../../resources/Constants';


const Header = (props) => {

    const welcome = (props.german) ? translations_de.header.welcome : translations.header.welcome;
    const more = (props.german) ? translations_de.header.more : translations.header.more;
    const title = (props.german) ? translations_de.header.title : translations.header.title;

    return <HeaderComponent 
        welcome={welcome}
        title={title}
        more={more}
        github={GITHUB_REPO}
        linkedIn={LINKED_IN}
        xing={XING}/>
}

export default Header;