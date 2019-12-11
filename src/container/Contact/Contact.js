import React from 'react';

import ContactForm from '../../components/Contact/ContactForm';

const contact = (props) => {

    const title = (props.german) ? "Kontakt" : "Contact";
    const name = (props.german) ? "Ihr Name": "Your name";
    const email = (props.german) ? "Ihre E-Mail Adresse" : "Your e-mail address";
    const message = (props.german) ? "Ihre Nachricht" : "Your message";
    const sendButton = (props.german) ? "Sende Nachricht" : "Send message";

    return (<ContactForm 
        title={title} 
        name={name} 
        email={email} 
        message={message}
        sendButton={sendButton}
    />)
}

export default contact;