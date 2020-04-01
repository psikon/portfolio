import React,{ Component } from 'react';

import ContactForm from '../../components/Contact/ContactForm';
import * as emailjs from 'emailjs-com'
import {translations_de} from '../../resources/translations_de';
import {translations} from '../../resources/translations';
import Modal from '../../components/UI/Modal/Modal';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                name: "",
                email: "",
                message: ""
            },
            status: true,
            showModal: false,
            errorMessage: null
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    toggleSubmitButton = (event) => {
        if (this.state.inputs.name === '' || this.state.inputs.email === '' || this.state.inputs.message === '') {
            return "disabled";
        }
        return ""
    }

    handleOnChange = (event) => {
        const input = {...this.state.inputs, [event.target.id]:event.target.value};
        this.setState({
            inputs: input
        });
    }


    handleOnSubmit(event) {
        event.preventDefault();
        console.log("begin");
        emailjs.send(
            'psikon86_gmail_com', 
            'template_RzEe2zxf', 
            {message_html: this.state.inputs.message, from_name: this.state.inputs.name, reply_to: this.state.inputs.email},
            'user_i0jbvS3b2UFuIchcJ92YI'
          ).then((response) => {
              this.setState({showModal:true})
              this.resetForm()
         }, (err) => {
            alert(err);
            console.log('FAILED...', err);
         });
         
        };

    toggleModal() {
        const show = !this.state.showModal;
        this.setState({showModal: show})
    }

    resetForm() {
        this.setState({
            inputs: {
                name: "",
                email: "",
                message: ""
            }
        })
    }
    
    render() {
        const title = (this.props.german) ? translations_de.contact.title : translations.contact.title;
        const name = (this.props.german) ? translations_de.contact.name : translations.contact.name;
        const email = (this.props.german) ? translations_de.contact.email : translations.contact.email;
        const message = (this.props.german) ? translations_de.contact.message : translations.contact.message;
        const sendButton = (this.props.german) ? translations_de.contact.send : translations.contact.send;

        return (
            <div>  
             {this.state.showModal ? <Modal text="Email successfully sent" onClick={this.toggleModal}/> :  null}
             <ContactForm 
                    title={title} 
                    value={this.state.inputs}
                    onChange={this.handleOnChange}
                    sendButton={sendButton}
                    sendStatus={this.toggleSubmitButton()}
                    onClickSend={this.handleOnSubmit}
                    namePlaceholder={name} 
                    emailPlaceholder={email} 
                    messagePlaceholder={message}
                    status={this.state.status}
                    errorMessage={this.state.errorMessage}
            />
            </div>
        )
    }

    
}

export default Contact;