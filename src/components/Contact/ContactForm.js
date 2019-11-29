import React from 'react';
import './ContactForm.css';

const contactForm = () => {
    return (
    <section id="contact">
        <div className="Contact">
            <div className="ContactForm">
                <h1 className="contact-title">Contact</h1>
                <input className="input" type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your e-mail address" />
                <textarea  placeholder="Your message" />
                <button type="submit"classnName="btn-send">Send message</button>
            </div>
        </div>
    </section>);
}

export default contactForm;