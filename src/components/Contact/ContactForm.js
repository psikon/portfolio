import React from 'react';
import './ContactForm.css';

const contactForm = (props) => {
    const title = (props.german) ? "Kontakt" : "Contact";
    const name = (props.german) ? "Ihr Name" : "Your name";
    const email = (props.german) ? "Ihre E-Mail Adresse" : "Your e-mail adress";
    const message = (props.german) ? "Ihre Nachricht" : "Your message";
    const sent = (props.german) ? "Sende Nachricht" : "Send message"

    return (
    <section id="contact">
        <div className="Contact">
            <div className="ContactForm">
                <h1 className="contact-title">{title}</h1>
                <input className="input" type="text" placeholder={name} />
                <input type="text" placeholder={email} />
                <textarea  placeholder={message} />
                <button type="submit"className="btn-send">{sent}</button>
            </div>
        </div>
    </section>);
}

export default contactForm;