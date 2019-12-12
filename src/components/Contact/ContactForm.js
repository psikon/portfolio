import React from 'react';
import './ContactForm.css';

const contactForm = (props) => {

    return (
    <section className="dark-background" id="contact">
        <div className="Contact">
            <div className="ContactForm ">
                <h1 className="section-header text-uppercase">{props.title}</h1>
                <input className="input" type="text" placeholder={props.name} />
                <input className="input" type="text" placeholder={props.email} />
                <textarea  type="text" placeholder={props.message} />
                <button type="submit"className="btn-primary">{props.sendButton}</button>
            </div>
        </div>
    </section>);
}

export default contactForm;