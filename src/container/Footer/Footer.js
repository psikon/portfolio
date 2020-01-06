import React from 'react'

import Footer from '../../components/Footer/Footer';
import {translations_de} from '../../resources/translations_de';
import {translations} from '../../resources/translations';
import { GITHUB_REPO, LINKED_IN, XING} from '../../resources/Constants';


const footer = (props) => {
    const buttonText = (props.german) ? translations_de.footer.button : translations.footer.button;

    return (
        <section className="Footer" id="footer">
            <Footer 
                name={translations.general.name}
                update={translations.general.update}
                button={buttonText} 
                github={GITHUB_REPO} 
                linkedIn={LINKED_IN} 
                xing={XING}/>
        </section>
    );
}

export default footer;