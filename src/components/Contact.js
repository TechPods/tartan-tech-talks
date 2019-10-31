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

const FormLabel = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export default class ContactPage extends Component {

    state = {
        firstName: '',
        lastName: '',
        company: '',
        role: '',
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

        let data = new FormData()

        data.set('firstName', this.state.firstName)
        data.set('lastName', this.state.lastName)
        data.set('company', this.state.company)
        data.set('role', this.state.role)
        data.set('email', this.state.email)

        axios({
            method: 'post',
            url: 'https://tartanbackend.stameno.now.sh/api/v1',
            data,
        })
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
                    <h3 style={{textAlign: 'center'}}>I'm interested in attending as:</h3>
                    <FormLabel className="message-name" htmlFor="message-name">First Name</FormLabel>
                    <input onChange={e => this.setState({firstName: e.target.value})} name="firstName" className="message-name"
                           type="text" placeholder="First Name" value={this.state.firstName}/>
                    <FormLabel className="message-name" htmlFor="message-name">Last Name</FormLabel>
                    <input onChange={e => this.setState({lastName: e.target.value})} name="lastName" className="message-name"
                           type="text" placeholder="Last Name" value={this.state.lastName}/>
                    <FormLabel className="message-name" htmlFor="message-name">Company</FormLabel>
                    <input onChange={e => this.setState({company: e.target.value})} name="company" className="message-name"
                           type="text" placeholder="Company" value={this.state.company}/>
                    <FormLabel className="message-name" htmlFor="message-name">Role</FormLabel>
                    <input onChange={e => this.setState({role: e.target.value})} name="role" className="message-name"
                           type="text" placeholder="Role" value={this.state.role}/>
                    <FormLabel className="message-email" htmlFor="message-email">Email</FormLabel>
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
