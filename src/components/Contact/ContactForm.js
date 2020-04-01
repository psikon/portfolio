import React from 'react';
import './ContactForm.css';

const contactForm = (props) => {

    return (
    <section className="dark-background" id="contact">
        <div className="Contact">
            <div className="ContactForm ">
                <h1 className="section-header text-uppercase">{props.title}</h1>
                <form onSubmit={props.handleOnSubmit}>
                    <input 
                        id="name"
                        type="text"
                        className="input"  
                        placeholder={props.namePlaceholder} 
                        onChange={props.onChange} 
                        value={props.value.name}
                        required/>
                    <input 
                        id="email"
                        type="email" 
                        className="input" 
                        placeholder={props.emailPlaceholder} 
                        onChange={props.onChange} 
                        value={props.value.email}
                        required/>
                    <textarea  
                        id="message"
                        type="text" 
                        placeholder={props.messagePlaceholder}  
                        onChange={props.onChange} 
                        value={props.value.message}
                        required/>
                <button 
                    type="submit"
                    className="btn-primary"
                    disabled={props.sendStatus}
                    onClick={props.onClickSend}>{props.sendButton}</button>
                </form>
            </div>
        </div>
    </section>);
}

export default contactForm;