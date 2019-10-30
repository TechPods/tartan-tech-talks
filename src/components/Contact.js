import React, {Component} from "react";
import styled from "styled-components";
import axios from 'axios'
import breakpoints from '../helpers/styles/breakpoints';

const ContactContainer = styled.div`
  display: block;
  position: relative;
  padding: 25px;
  @media ${breakpoints.mobileX} {
    width: calc(100% - 130px);
    margin: auto;
  }
`;
const ContactTitle = styled.h1`
  @media ${breakpoints.mobileX} {
    transform: rotate(90deg);
    transform-origin: left top 0;
    position: relative;
  }

  svg {
    max-width: 250px;
    max-height: 55px;
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    top: 4px;
  }
`;

export default class ContactPage extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('http://localhost:4444/api/v1', data)
            .then( res => {
                this.setState({ sent: true }, this.resetForm())
            })
            .catch( () => {
                console.log('Message not sent')
            })
    };

    render(){
        return(
            <ContactContainer>
                <ContactTitle id="contact">
                    Contact
                </ContactTitle>
                <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                    <label className="message" htmlFor="message-input">Your Message</label>
                    <textarea onChange={e => this.setState({message: e.target.value})} name="message"
                              className="message-input" type="text" placeholder="Please write your message here"
                              value={this.state.message} required/>

                    <label className="message-name" htmlFor="message-name">Your Name</label>
                    <input onChange={e => this.setState({name: e.target.value})} name="name" className="message-name"
                           type="text" placeholder="Your Name" value={this.state.name}/>

                    <label className="message-email" htmlFor="message-email">Your Email</label>
                    <input onChange={(e) => this.setState({email: e.target.value})} name="email"
                           className="message-email" type="email" placeholder="your@email.com" required
                           value={this.state.email}/>

                    <div className="button--container">
                        <button type="submit" className="button button-primary">{this.state.buttonText}</button>
                    </div>
                </form>
            </ContactContainer>
        )
    }
}
