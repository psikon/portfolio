import React,{ Component } from 'react';

import ContactForm from '../../components/Contact/ContactForm';

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
            errorMessage: null
        }
        this.handleOnChange = this.handleOnChange.bind(this);
	    this.handleOnSubmit = this.handleOnSubmit.bind(this);
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
        console.log(this.state)
    }


    handleOnSubmit = event => {
        const templateId = 'template_RzEe2zxf';
	    this.sendFeedback(templateId, {message_html: this.state.inputs.message, from_name: this.state.inputs.name, reply_to: this.state.inputs.email})
      };

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
    
    render() {
        const title = (this.props.german) ? "Kontakt" : "Contact";
        const name = (this.props.german) ? "Ihr Name": "Your name";
        const email = (this.props.german) ? "Ihre E-Mail Adresse" : "Your e-mail address";
        const message = (this.props.german) ? "Ihre Nachricht" : "Your message";
        const sendButton = (this.props.german) ? "Sende Nachricht" : "Send message";

        return (<ContactForm 
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
        />)
    }

    
}

export default Contact;