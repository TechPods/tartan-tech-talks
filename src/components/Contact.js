import React, {Component} from "react";
import styled from "styled-components";
import axios from 'axios'
import breakpoints from '../helpers/styles/breakpoints';

const ContactContainer = styled.div`
  margin-top: 30px;
  height: calc(100vh - 200px);
  display: block;
  padding: 30px;
  position: relative;
  padding-left: 60px;
  padding-left:
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
    padding-left: 0px;
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

const TextInput = styled.input`
   border-radius: 8px;
   width: 100%;
   padding: 8px 12px;
   border-width: 0;
   box-shadow: 0 0 2px rgba(0,0,0,0.3);
`;

const FormComponent = styled.form`
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
`;

const SubmitButton = styled.button`
    width: 200px;
    margin: 0 auto;
    padding: 8px 12px;
    background-color: #105327;
    color: #fff;
    border-radius: 8px;
    margin-top: 20px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    text-align: center;
`;

const ContactContent = styled.div`
   border-left: 15px solid #105327;
   text-align: center;
`;

const SwitchButton = styled.button`
  outline: 0;
  border: 1px;
  text-align: center;
padding: 8px 12px;
  ${({ active }) => active && `
    background: #105327;
    color: #fff;
  `}
`;

const SwitchContainer = styled.div`
   border: 1px solid #105327;
   display: inline-block;
   margin: 0 auto;
   margin-bottom: 20px;
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
        buttonText: 'Send Message',
        speaker: true
    }

    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            company: '',
            role: '',
            email: '',
            buttonText: 'Mesage sent',
            speaker: true
        })
    };

    toggleClass = () => {
        const currentState = this.state.speaker;
        this.setState({ speaker: !currentState });
    };

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
        data.set('type', this.state.speaker? 'Speaker': 'Attendee')

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
                <ContactContent>
                    <h3 style={{textAlign: 'center'}}>I'm interested in attending as:</h3>
                    <SwitchContainer>
                        <SwitchButton
                            active={this.state.speaker}
                            onClick={() => this.setState({speaker: true})}
                        >
                            Speaker
                        </SwitchButton>
                        <SwitchButton
                            active={!this.state.speaker}
                            onClick={() => this.setState({speaker: false})}
                        >
                            Attendee
                        </SwitchButton>
                    </SwitchContainer>
                    <FormComponent onSubmit={(e) => this.formSubmit(e)}>
                        <FormLabel htmlFor="message-name">First Name</FormLabel>
                        <TextInput onChange={e => this.setState({firstName: e.target.value})} name="firstName" className="message-name"
                               type="text" placeholder="First Name" value={this.state.firstName}/>
                        <FormLabel htmlFor="message-name">Last Name</FormLabel>
                        <TextInput onChange={e => this.setState({lastName: e.target.value})} name="lastName" className="message-name"
                               type="text" placeholder="Last Name" value={this.state.lastName}/>
                        <FormLabel htmlFor="message-name">Company</FormLabel>
                        <TextInput onChange={e => this.setState({company: e.target.value})} name="company" className="message-name"
                               type="text" placeholder="Company" value={this.state.company}/>
                        <FormLabel htmlFor="message-name">Role</FormLabel>
                        <TextInput onChange={e => this.setState({role: e.target.value})} name="role" className="message-name"
                               type="text" placeholder="Role" value={this.state.role}/>
                        <FormLabel htmlFor="message-email">Email</FormLabel>
                        <TextInput onChange={(e) => this.setState({email: e.target.value})} name="email"
                               className="message-email" type="email" placeholder="your@email.com" required
                               value={this.state.email}/>

                        <ButtonContainer>
                            <SubmitButton type="submit" className="button button-primary">{this.state.buttonText}</SubmitButton>
                        </ButtonContainer>
                    </FormComponent>
                </ContactContent>
            </ContactContainer>
        )
    }
}
